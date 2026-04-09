import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLMeterElement, addClassName } from "./util.js";

/**
 * Initializes an HTML meter element.
 * 
 * The element gets the 'HTMLMeterElement' and 'meter' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLMeterElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLMeterElement(elem), 'instanceof HTMLMeterElement');
    return initHTMLElement(elem, addClassName(props, "HTMLMeterElement meter"), ...children);
}

/**
 * creates an HTML meter element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLMeterElement = (props, ...children) => {
    const obj = document.createElement('meter');
    return initHTMLMeterElement(obj, props, ...children);
}

/**
 * creates an HTML meter element.
 * Same as `HTMLMeterElement`.
 */
export const meter = HTMLMeterElement;
