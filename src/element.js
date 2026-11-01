import './init.js';
import { isFunction } from './utility.js';

/******************************************************************************
    PUBLIC
 ******************************************************************************/

/**
 * Creates an element and sets it up from the given components.
 *
 * Each component is handled according to its type:
 * - a property bag: its properties are assigned to the element's properties (see below).
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
 * When a property bag is applied, each of its keys is handled according to the type of the value:
 * - if the element's current value for the key is an object (e.g. `style`, `dataset`,
 *   or an element exposed by a property) and the new value is a property bag,
 *   then the properties of the bag are assigned to the current value, instead of replacing it.
 * - if the element's current value for the key is an object and the new value is an array,
 *   then the current value is set up from the array, as if it was passed to this function;
 *   children are appended to the existing ones.
 * - if the key starts with `--`, the value is set as a CSS custom property;
 *   this works only on style objects, i.e. `{ style: { '--color': 'red' } }`.
 * - otherwise, the value is assigned to the property; to replace an object property,
 *   including an element, pass a value that is not a property bag or an array, e.g. another element.
 *
 * @example
 * const panel = element('div',
 *     { className: 'panel', style: { color: 'red', '--gap': '4px' } },
 *     element('h1', 'Title'),
 *     [element('p', 'one'), element('p', 'two')],
 *     (el) => el.setAttribute('role', 'region'));
 *
 * @param {string} tag the tag name of the element to create.
 * @param {...*} components the components to set the element up from.
 * @returns {HTMLElement} the new element.
 */
export const element = (tag, ...components) => {
    const createdElement = document.createElement(tag);
    setComponentsFromArray(createdElement, components);
    return createdElement;
}

/**
 * Sets up an existing element from the given components;
 * the components are handled as in {@link element}.
 *
 * Components that append (nodes, text, arrays of them) add to the element's existing children.
 *
 * @param {Element} targetElement the element to set up.
 * @param {...*} components the components to set the element up from.
 * @returns {Element} the target element.
 */
export const setElement = (targetElement, ...components) => {
    setComponentsFromArray(targetElement, components);
    return targetElement;
}

/******************************************************************************
    PRIVATE
 ******************************************************************************/

//sets the components from an array.
const setComponentsFromArray = (element, components) => {
    for(const component of components) {
        setComponent(element, component);
    }
}

//sets a component of an element;
//we don't actually care if the element is indeed an element,
//since an exception will be thrown if it is not.
const setComponent = (element, component) => {
    //set properties from property bag
    if (isPropertyBag(component)) {
        setPropertiesFromPropertyBag(element, component);
        return;
    }

    //set components from array
    if (Array.isArray(component)) {
        setComponentsFromArray(element, component);
        return;
    }

    //setup the element by function; ignore the result of the function
    if (isFunction(component)) {
        component(element);
        return;
    }

    //add component as dom node/string;
    //null and undefined are allowed to be rendered as text,
    //so as that the developer realizes these values are null/undefined.
    element.append(component);
}

//checks if a value represents a property bag object;
//for this module, a value is a property bag object if:
// - it is an assignable object
// - none of its prototypes was created by the engine,
//   so that Date, Map, RegExp, URL, DOM nodes etc. are not property bags
//   and are rendered as text instead.
const isPropertyBag = (value) => {
    if (!isAssignableObject(value)) {
        return false;
    }

    for (let proto = Object.getPrototypeOf(value); proto !== null && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
        const ctor = Object.getOwnPropertyDescriptor(proto, 'constructor')?.value;
        if (isFunction(ctor) && isNative(ctor)) {
            return false;
        }
    }

    return true;
}

//checks if a function is implemented natively by the engine;
//the language specification requires built-in functions to end with '{ [native code] }'.
const isNative = (fn) => {
    return /\{\s*\[native code\]\s*\}\s*$/.test(Function.prototype.toString.call(fn));
}

//sets the properties from a property bag
const setPropertiesFromPropertyBag = (element, propertyBag) => {
    for (const key in propertyBag) {
        const newValue = propertyBag[key];
        setProperty(element, key, newValue);
    }
}

//sets a property of an object
const setProperty = (object, key, newValue) => {
    //it does not matter if a relayout is created from reading the property value
    const currentValue = object[key];

    //property bags and arrays are meaningful only if the target property is an assignable object
    if (isAssignableObject(currentValue)) {
        //set object properties from properties object;
        //we don't need to check if the current value is an element, style or dataset,
        //because setting the state of an object from a property bag is an operation
        //that will actually set the state's properties.
        if (isPropertyBag(newValue)) {
            setPropertiesFromPropertyBag(currentValue, newValue);
            return;
        }

        //setup object from array
        if (Array.isArray(newValue)) {
            setComponentsFromArray(currentValue, newValue);
            return;
        }
    }

    //set custom property
    if (key.startsWith('--')) {
        console.assert(object instanceof CSSStyleDeclaration, `custom property '${key}' can only be set on a style object; use { style: { '${key}': ... } }`);
        object.setProperty(key, newValue);
        return;
    }

    //set property from value
    object[key] = newValue;
}

//checks if a value represents an assignable object;
//for this module, a value is an assignable object if:
// - it is not a primitive
// - it is not an array
// - it is not a function
const isAssignableObject = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
