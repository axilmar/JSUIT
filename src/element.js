import { isFunction } from './utility.js';

/******************************************************************************
    PUBLIC
 ******************************************************************************/

/**
 * Creates an element and sets its props.
 *
 * Props can be:
 * - nodes (appended),
 * - property bags (assigned to the element's properties),
 * - arrays (flattened),
 * - functions (invoked with the element),
 * - anything else (appended as text).
 *
 * A property bag is an object whose enumerable keys, including inherited ones, name the element's
 * properties to set, e.g. `{ className: 'x', style: { color: 'red' } }`.
 * Object literals, objects created with `Object.create`, and instances of user-defined classes
 * (their own fields) are property bags; arrays, nodes and instances of built-in types
 * (such as `Date` or `Map`) are not.
 * The `style` and `dataset` keys accept a property bag too, which sets their individual properties;
 * keys of `style` starting with `--` set CSS custom properties.
 * The same applies to any property that holds an element (e.g. `nextElementSibling`): a property bag
 * sets the properties of that element, instead of replacing it; an array sets the element from the
 * array's props, as if passed to this function (so children are appended to the existing ones);
 * any other value, e.g. another element, is assigned to the property.
 *
 * @param {string} tag the tag name of the element to create.
 * @param {...*} props the props to set on the element.
 * @returns {HTMLElement} the new element.
 */
export const createElement = (tag, ...props) => {
    const element = document.createElement(tag);
    setPropsFromArray(element, props);
    return element;
}

/**
 * Sets props on an existing element; the props are handled as in {@link createElement}.
 *
 * @param {Element} element the element to set the props on.
 * @param {...*} props the props to set on the element.
 */
export const setElementProps = (element, ...props) => {
    setPropsFromArray(element, props);
}

/******************************************************************************
    PRIVATE
 ******************************************************************************/

//sets a prop of an element
const setProp = (element, prop) => {
    //insert node
    if (prop instanceof Node) {
        element.append(prop);
        return;
    }

    //set props from property bag
    if (isPropertyBag(prop)) {
        setPropsFromPropertyBag(element, prop);
        return;
    }

    //set props from array
    if (Array.isArray(prop)) {
        setPropsFromArray(element, prop);
        return;
    }

    //invoke function; its return value is of no interest, since it is meant to modify the element
    if (isFunction(prop)) {
        prop(element);
        return;
    }

    //insert text; booleans should work too as text, someone might want to put 'true' or 'false' onto the screen
    element.append(prop?.toString() ?? '');
}

//checks if an object can be used as a property bag.
const isPropertyBag = (value) => {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    for (let proto = Object.getPrototypeOf(value); proto !== null; proto = Object.getPrototypeOf(proto)) {
        if (proto === Object.prototype) {
            return true;
        }
        const ctor = Object.getOwnPropertyDescriptor(proto, 'constructor')?.value;
        if (isFunction(ctor) && isNative(ctor)) {
            return false;
        }
    }

    return true;
}

//sets props from array
const setPropsFromArray = (element, props) => {
    for(const prop of props) {
        setProp(element, prop);
    }
}

//set props from object; it includes inherited keys as well on purpose, to allow inheritance.
const setPropsFromPropertyBag = (object, props) => {
    for(const key in props) {
        const value = props[key];
        setValue(object, key, value);
    }
}

//sets a property value:
//- if the value is a property bag and the property holds a host object (style, dataset) or an element,
//  then it sets the properties of that object from the properties of the bag;
//- if the value is an array and the property holds an element, then it sets the element from the array,
//  as in createElement (children are appended to the existing ones, not replaced);
//- otherwise it sets the object's property.
const setValue = (object, key, value) => {
    //set host object or element; the value is checked first, so that the property is read only when needed,
    //since reading some properties (e.g. scrollTop) is costly.
    if (isPropertyBag(value) && (isHost(key) || object[key] instanceof Element)) {
        setPropsFromPropertyBag(object[key], value);
        return;
    }

    //set style custom property
    if (key.startsWith('--') && object instanceof CSSStyleDeclaration) {
        object.setProperty(key, value);
        return;
    }

    //if object[key] is an element, and value is an array, then set the element from the array;
    //the value is checked first, for the same reason as above.
    if (Array.isArray(value) && object[key] instanceof Element) {
        setPropsFromArray(object[key], value);
        return;
    }

    //set plain property
    object[key] = value;
}

//checks if a function is implemented natively by the engine.
const isNative = (fn) => {
    return Function.prototype.toString.call(fn).includes('[native code]');
}

//checks if property represents a host object.
const isHost = (key) => {
    return key === 'style' || key === 'dataset';
}
