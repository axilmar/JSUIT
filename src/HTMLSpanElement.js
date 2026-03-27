import { addClassName } from "./Element.js";
import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLSpanElement } from "./util.js";

/**
 * Initializes an HTML span element.
 * 
 * The element gets the 'HTMLSpanElement' and 'span' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLSpanElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLSpanElement(elem));
    return initHTMLElement(elem, addClassName(props, "HTMLSpanElement span"), children);
}

/**
 * creates an HTML span element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLSpanElement = (props, children) => {
    const obj = document.createElement('span');
    return initHTMLSpanElement(obj, props, children);
}

/**
 * creates an HTML span element.
 * Same as `HTMLSpanElement`.
 */
export const Span = HTMLSpanElement;
