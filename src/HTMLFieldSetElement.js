import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLFieldSetElement, addClassName } from "./util.js";

/**
 * Initializes an HTML fieldset element.
 * 
 * The element gets the 'HTMLFieldSetElement' and 'fieldset' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLFieldSetElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLFieldSetElement(elem), 'instanceof HTMLFieldSetElement');
    return initHTMLElement(elem, addClassName(props, "HTMLFieldSetElement fieldset"), ...children);
}

/**
 * creates an HTML fieldset element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLFieldSetElement = (props, ...children) => {
    const obj = document.createElement('fieldset');
    return initHTMLFieldSetElement(obj, props, ...children);
}

/**
 * creates an HTML fieldset element.
 * Same as `HTMLFieldSetElement`.
 */
export const fieldset = HTMLFieldSetElement;
