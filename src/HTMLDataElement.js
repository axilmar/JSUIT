import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLDataElement, addClassName } from "./util.js";

/**
 * Initializes an HTML data element.
 * 
 * The element gets the 'HTMLDataElement' and 'data' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLDataElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLDataElement(elem), 'instanceof HTMLDataElement');
    return initHTMLElement(elem, addClassName(props, "HTMLDataElement data"), ...children);
}

/**
 * creates an HTML data element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLDataElement = (props, ...children) => {
    const obj = document.createElement('data');
    return initHTMLDataElement(obj, props, ...children);
}

/**
 * creates an HTML data element.
 * Same as `HTMLDataElement`.
 */
export const data = HTMLDataElement;
