import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLMenuElement, addClassName } from "./util.js";

/**
 * Initializes an HTML menu element.
 * 
 * The element gets the 'HTMLMenuElement' and 'menu' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLMenuElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLMenuElement(elem), 'instanceof HTMLMenuElement');
    return initHTMLElement(elem, addClassName(props, "HTMLMenuElement menu"), ...children);
}

/**
 * creates an HTML menu element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLMenuElement = (props, ...children) => {
    const obj = document.createElement('menu');
    return initHTMLMenuElement(obj, props, ...children);
}

/**
 * creates an HTML menu element.
 * Same as `HTMLMenuElement`.
 */
export const menu = HTMLMenuElement;
