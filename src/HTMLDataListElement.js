import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLDataListElement, addClassName } from "./util.js";

/**
 * Initializes an HTML datalist element.
 * 
 * The element gets the 'HTMLDataListElement' and 'datalist' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLDataListElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLDataListElement(elem), 'instanceof HTMLDataListElement');
    return initHTMLElement(elem, addClassName(props, "HTMLDataListElement datalist"), ...children);
}

/**
 * creates an HTML datalist element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLDataListElement = (props, ...children) => {
    const obj = document.createElement('datalist');
    return initHTMLDataListElement(obj, props, ...children);
}

/**
 * creates an HTML datalist element.
 * Same as `HTMLDataListElement`.
 */
export const datalist = HTMLDataListElement;
