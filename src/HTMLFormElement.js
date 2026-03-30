import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLFormElement, addClassName } from "./util.js";

/**
 * Initializes an HTML form element.
 * 
 * The element gets the 'HTMLFormElement' and 'form' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLFormElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLFormElement(elem), 'instanceof HTMLFormElement');
    return initHTMLElement(elem, addClassName(props, "HTMLFormElement form"), children);
}

/**
 * creates an HTML form element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLFormElement = (props, children) => {
    const obj = document.createElement('form');
    return initHTMLFormElement(obj, props, children);
}

/**
 * creates an HTML form element.
 * Same as `HTMLFormElement`.
 */
export const form = HTMLFormElement;
