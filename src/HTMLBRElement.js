import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLBRElement, addClassName } from "./util.js";

/**
 * Initializes an HTML br element.
 * 
 * The element gets the 'HTMLBRElement' and 'br' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLBRElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLBRElement(elem));
    return initHTMLElement(elem, addClassName(props, "HTMLBRElement br"), children);
}

/**
 * creates an HTML br element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLBRElement = (props, children) => {
    const obj = document.createElement('br');
    return initHTMLBRElement(obj, props, children);
}

/**
 * creates an HTML br element.
 * Same as `HTMLBRElement`.
 */
export const br = HTMLBRElement;
