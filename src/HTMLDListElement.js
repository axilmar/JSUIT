import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLDListElement, addClassName } from "./util.js";

/**
 * Initializes an HTML dlist element.
 * 
 * The element gets the 'HTMLDListElement' and 'dl' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLDListElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLDListElement(elem));
    return initHTMLElement(elem, addClassName(props, "HTMLDListElement dl"), children);
}

/**
 * creates an HTML dlist element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLDListElement = (props, children) => {
    const obj = document.createElement('dlist');
    return initHTMLDListElement(obj, props, children);
}

/**
 * creates an HTML dlist element.
 * Same as `HTMLDListElement`.
 */
export const dl = HTMLDListElement;
