import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLDivElement, addClassName } from "./util.js";

/**
 * Initializes an HTML div element.
 * 
 * The element gets the 'HTMLDivElement' and 'div' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLDivElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLDivElement(elem));
    return initHTMLElement(elem, addClassName(props, "HTMLDivElement div"), children);
}

/**
 * creates an HTML div element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLDivElement = (props, children) => {
    const obj = document.createElement('div');
    return initHTMLDivElement(obj, props, children);
}

/**
 * creates an HTML div element.
 * Same as `HTMLDivElement`.
 */
export const div = HTMLDivElement;
