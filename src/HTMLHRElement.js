import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLHRElement, addClassName } from "./util.js";

/**
 * Initializes an HTML hr element.
 * 
 * The element gets the 'HTMLHRElement' and 'hr' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLHRElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLHRElement(elem), 'instanceof HTMLHRElement');
    return initHTMLElement(elem, addClassName(props, "HTMLHRElement hr"), ...children);
}

/**
 * creates an HTML hr element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLHRElement = (props, ...children) => {
    const obj = document.createElement('hr');
    return initHTMLHRElement(obj, props, ...children);
}

/**
 * creates an HTML hr element.
 * Same as `HTMLHRElement`.
 */
export const hr = HTMLHRElement;
