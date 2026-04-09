import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLDialogElement, addClassName } from "./util.js";

/**
 * Initializes an HTML dialog element.
 * 
 * The element gets the 'HTMLDialogElement' and 'dialog' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLDialogElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLDialogElement(elem), 'instanceof HTMLDialogElement');
    return initHTMLElement(elem, addClassName(props, "HTMLDialogElement dialog"), ...children);
}

/**
 * creates an HTML dialog element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLDialogElement = (props, ...children) => {
    const obj = document.createElement('dialog');
    return initHTMLDialogElement(obj, props, ...children);
}

/**
 * creates an HTML dialog element.
 * Same as `HTMLDialogElement`.
 */
export const dialog = HTMLDialogElement;
