import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLButtonElement, addClassName } from "./util.js";

/**
 * Initializes an HTML button element.
 * 
 * The element gets the 'HTMLButtonElement' and 'button' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLButtonElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLButtonElement(elem), 'instanceof HTMLButtonElement');
    return initHTMLElement(elem, addClassName(props, "HTMLButtonElement button"), children);
}

/**
 * creates an HTML button element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLButtonElement = (props, children) => {
    const obj = document.createElement('button');
    return initHTMLButtonElement(obj, props, children);
}

/**
 * creates an HTML button element.
 * Same as `HTMLButtonElement`.
 */
export const button = HTMLButtonElement;
