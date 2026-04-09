import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLLIElement, addClassName } from "./util.js";

/**
 * Initializes an HTML li element.
 * 
 * The element gets the 'HTMLLIElement' and 'li' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLLIElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLLIElement(elem), 'instanceof HTMLLIElement');
    return initHTMLElement(elem, addClassName(props, "HTMLLIElement li"), children);
}

/**
 * creates an HTML li element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLLIElement = (props, children) => {
    const obj = document.createElement('li');
    return initHTMLLIElement(obj, props, children);
}

/**
 * creates an HTML li element.
 * Same as `HTMLLIElement`.
 */
export const li = HTMLLIElement;
