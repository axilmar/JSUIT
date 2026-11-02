import './init.js';
import { assert, isFunction } from './utility.js';

/******************************************************************************
    PUBLIC
 ******************************************************************************/

/**
 * Sets up an existing element from the given components;
 * the components are handled as in {@link createHTMLElement}.
 *
 * It is meant to be called from the constructors of classes derived from HTMLElement.
 * Unlike {@link setHTMLElement}, it does not return the element.
 *
 * Before the components are processed, the element gets a `visible` property,
 * which is the opposite of the `hidden` property (`visible = true` is the same as `hidden = false`),
 * unless the element already has a property with that name.
 * Elements that have a `disabled` property (buttons, inputs, selects etc) also get an `enabled` property,
 * which is the opposite of `disabled`, under the same condition.
 * Since the properties are defined first, `visible` and `enabled` can be used in a property bag.
 *
 * @param {HTMLElement} element the element to set up.
 * @param {...*} components the components to set the element up from.
 * @throws {Error} if the element is not an instance of HTMLElement.
 */
export const initHTMLElement = (element, ...components) => {
    assert(element instanceof HTMLElement, "Value in 'element' argument is not an instance of HTMLElement.");
    defineVisibleProperty(element);
    defineEnabledProperty(element);
    setHTMLElementFromComponentArray(element, components);
}

/**
 * Creates an element and sets it up from the given components.
 *
 * Each component is handled according to its type:
 * - a property bag: its properties are assigned to the element's properties (see {@link HTMLElement_setProperty}).
 * - an array: its items are handled as components, recursively.
 * - a function: it is invoked with the element; its result is ignored.
 * - anything else (DOM nodes, strings, numbers, booleans, null, undefined, dates etc):
 *   it is appended to the element; non-nodes are appended as text,
 *   so `null` and `undefined` appear as the text 'null' and 'undefined'.
 *
 * A property bag is an object literal, an object created with `Object.create`,
 * or an instance of a user-defined class; objects created by the engine
 * (arrays, dates, maps, regular expressions, URLs, DOM nodes etc) are not property bags.
 * Inherited enumerable keys are used as well as own ones.
 *
 * @example
 * const panel = createHTMLElement('div',
 *     { className: 'panel', style: { color: 'red', '--gap': '4px' } },
 *     createHTMLElement('h1', 'Title'),
 *     [createHTMLElement('p', 'one'), createHTMLElement('p', 'two')],
 *     (el) => el.setAttribute('role', 'region'));
 *
 * @param {string} tag the tag name of the element to create.
 * @param {...*} components the components to set the element up from.
 * @returns {HTMLElement} the new element.
 * @throws {Error} if the tag does not create an instance of HTMLElement.
 */
export const createHTMLElement = (tag, ...components) => {
    const element = document.createElement(tag);
    initHTMLElement(element, ...components);
    return element;
}

/**
 * Sets up an existing element from the given components;
 * the components are handled as in {@link createHTMLElement}.
 *
 * Components that append (nodes, text, arrays of them) add to the element's existing children.
 *
 * @param {HTMLElement} element the element to set up.
 * @param {...*} components the components to set the element up from.
 * @returns {HTMLElement} the element.
 * @throws {Error} if the element is not an instance of HTMLElement.
 */
export const setHTMLElement = (element, ...components) => {
    assert(element instanceof HTMLElement, "Value in 'element' argument is not an instance of HTMLElement.");
    setHTMLElementFromComponentArray(element, components);
    return element;
}

/**
 * The default implementation of the setProperty method of an element;
 * it is used for each key of a property bag, unless the element has a method named `setProperty`,
 * in which case that method is called instead.
 * A class derived from HTMLElement can therefore define `setProperty(key, value)`
 * to handle some keys on its own, and delegate the rest to this function
 * with `HTMLElement_setProperty.call(this, key, value)`.
 *
 * The value is handled according to its type and the type of the element's current value for the key:
 * - a property bag, if the current value is an element:
 *   the properties of the bag are set on that element, as with a property bag passed to {@link createHTMLElement}.
 * - a property bag, if the current value is a DOMTokenList (`classList`, `part`, `relList`, `sandbox`):
 *   the tokens are replaced with the keys of the bag that have truthy values.
 * - a property bag, if the current value is any other object (`style`, `dataset` etc):
 *   the properties of the bag are assigned to the properties of that object, instead of replacing it;
 *   keys starting with `--` are set as CSS custom properties, which works only on style objects.
 * - an array, if the current value is an element:
 *   the element is set up from the array, as if it was passed to {@link createHTMLElement};
 *   children are appended to the existing ones.
 * - an array, if the current value is a DOMTokenList: the tokens are replaced with the truthy items of the array.
 * - anything else, including an element (which replaces the current element): the value is assigned to the property.
 *
 * Assigning a string to a DOMTokenList property also replaces its tokens;
 * all the forms are therefore consistent.
 *
 * @this {HTMLElement}
 * @param {string} key the name of the property.
 * @param {*} value the value of the property.
 * @throws {Error} if the key starts with `--`, since custom properties can be set only through `style`.
 */
export function HTMLElement_setProperty(key, value) {
    //custom properties are set on style objects only
    assert(!isCustomProperty(key), customPropertyMessage(key));

    if (isPropertyBag(value)) {
        //the current value is read only when the value is a property bag or an array,
        //since reading some properties (e.g. innerText) can be costly
        const currentValue = this[key];

        //set the properties of the element behind the property from the bag
        if (currentValue instanceof HTMLElement) {
            setHTMLElementFromPropertyBag(currentValue, value);
            return;
        }

        //replace the tokens with the keys that have truthy values
        if (currentValue instanceof DOMTokenList) {
            currentValue.value = getTruthyKeys(value).join(' ');
            return;
        }

        //set the properties of the object (style, dataset etc) from the bag
        if (isAssignableObject(currentValue)) {
            setObjectFromPropertyBag(currentValue, value);
            return;
        }
    }

    if (Array.isArray(value)) {
        const currentValue = this[key];

        //set up the element behind the property from the array
        if (currentValue instanceof HTMLElement) {
            setHTMLElementFromComponentArray(currentValue, value);
            return;
        }

        //replace the tokens with the truthy items
        if (currentValue instanceof DOMTokenList) {
            currentValue.value = value.filter(Boolean).join(' ');
            return;
        }
    }

    //set the property from the value
    this[key] = value;
}

/******************************************************************************
    PRIVATE
 ******************************************************************************/

//defines a boolean property on an element, which is the opposite of another boolean property of the element;
//an existing property with the same name (e.g. defined by a derived class) is left alone.
const defineOppositeProperty = (element, name, oppositeName) => {
    if (name in element) {
        return;
    }

    Object.defineProperty(element, name, {
        configurable: true,
        get() {
            return !this[oppositeName];
        },
        set(value) {
            this[oppositeName] = !value;
        }
    });
}

//defines the visible property of an element, which is the opposite of the hidden property.
const defineVisibleProperty = (element) => {
    defineOppositeProperty(element, 'visible', 'hidden');
}

//defines the enabled property of an element, which is the opposite of the disabled property;
//it is defined only for elements that have a disabled property.
const defineEnabledProperty = (element) => {
    if ('disabled' in element) {
        defineOppositeProperty(element, 'enabled', 'disabled');
    }
}

//sets the properties of an element from a property bag;
//each key of the bag, including inherited keys, is set on the element.
const setHTMLElementFromPropertyBag = (element, propertyBag) => {
    for (const key in propertyBag) {
        const value = propertyBag[key];
        setHTMLElementProperty(element, key, value);
    }
}

//sets a property of an element;
//if the element defines its own setProperty method (e.g. a derived class), that method is used,
//otherwise the default implementation is used.
const setHTMLElementProperty = (element, key, value) => {
    //custom handling
    if (isFunction(element.setProperty)) {
        element.setProperty(key, value);
    }

    //default handling
    else {
        HTMLElement_setProperty.call(element, key, value);
    }
}

//sets an element from an array of components
const setHTMLElementFromComponentArray = (element, components) => {
    for(const component of components) {
        setHTMLElementFromComponent(element, component);
    }
}

//sets an element from a component, according to the component's type
const setHTMLElementFromComponent = (element, component) => {
    //set properties from property bag
    if (isPropertyBag(component)) {
        setHTMLElementFromPropertyBag(element, component);
        return;
    }

    //set components from array
    if (Array.isArray(component)) {
        setHTMLElementFromComponentArray(element, component);
        return;
    }

    //set up the element by function; the result of the function is ignored
    if (isFunction(component)) {
        component(element);
        return;
    }

    //append the component as dom node or text;
    //null and undefined are appended as text on purpose,
    //so as that the developer realizes that these values are null/undefined.
    element.append(component);
}

//checks if a value is a property bag;
//a value is a property bag if it is an assignable object
//and none of the prototypes in its chain was created by the engine,
//so as that arrays, dates, maps, regular expressions, URLs, DOM nodes etc are not property bags.
const isPropertyBag = (value) => {
    //not an object
    if (!isAssignableObject(value)) {
        return false;
    }

    //walk the prototype chain, until Object.prototype is found
    for (let proto = Object.getPrototypeOf(value); proto !== null && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
        //a native constructor means that the object is created by the engine
        const ctor = Object.getOwnPropertyDescriptor(proto, 'constructor')?.value;
        if (isFunction(ctor) && isNative(ctor)) {
            return false;
        }
    }

    return true;
}

//checks if a value is an assignable object;
//a value is an assignable object if it is not a primitive, not an array and not a function.
const isAssignableObject = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

//the string representation of a native function ends with '{ [native code] }';
//the language specification requires it.
const isNativeRegEx = /\{\s*\[native code\]\s*\}\s*$/;

//checks if a function is implemented natively by the engine.
const isNative = (fn) => {
    return isNativeRegEx.test(Function.prototype.toString.call(fn));
}

//sets the properties of an object (e.g. style, dataset) from a property bag;
//the properties of the bag are assigned to the object's properties.
const setObjectFromPropertyBag = (object, propertyBag) => {
    for(const key in propertyBag) {
        const value = propertyBag[key];

        //set custom property; it works only on style objects
        if (isCustomProperty(key)) {
            assert(object instanceof CSSStyleDeclaration, customPropertyMessage(key));
            object.setProperty(key, value);
            continue;
        }

        //set property from value
        object[key] = value;
    }
}

//returns the keys of a property bag, including inherited ones, that have truthy values.
const getTruthyKeys = (propertyBag) => {
    const keys = [];
    for(const key in propertyBag) {
        if (propertyBag[key]) {
            keys.push(key);
        }
    }
    return keys;
}

//checks if a key is the name of a css custom property.
const isCustomProperty = (key) => {
    return key.startsWith('--');
}

//returns the error message for a custom property that is set on a non-style object.
const customPropertyMessage = (key) => {
    return `Custom property '${key}' can only be set on a style object; use { style: { '${key}': ... } }.`;
}
