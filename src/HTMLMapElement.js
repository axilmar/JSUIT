import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLMapElement, addClassName } from "./util.js";

/**
 * Initializes an HTML map element.
 * 
 * The element gets the 'HTMLMapElement' and 'map' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLMapElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLMapElement(elem), 'instanceof HTMLMapElement');
    return initHTMLElement(elem, addClassName(props, "HTMLMapElement map"), ...children);
}

/**
 * creates an HTML map element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLMapElement = (props, ...children) => {
    const obj = document.createElement('map');
    return initHTMLMapElement(obj, props, ...children);
}

/**
 * creates an HTML map element.
 * Same as `HTMLMapElement`.
 */
export const map = HTMLMapElement;
