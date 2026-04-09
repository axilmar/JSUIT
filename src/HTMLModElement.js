import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLModElement, addClassName } from "./util.js";

/**
 * Initializes an HTML mod element.
 * 
 * The element gets the 'HTMLModElement', 'mod' class names,
 * in addition to either 'del' or 'ins' classes.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLModElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLModElement(elem), 'instanceof HTMLModElement');
    return initHTMLElement(elem, addClassName(props, "HTMLModElement mod"), ...children);
}

/**
 * creates an HTML del element.
 * 
 * The element gets the 'del' class name.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @return a del element.
 */
export const del = (props, ...children) => {
    const obj = document.createElement('del');
    return initHTMLModElement(obj, addClassName(props, 'del'), ...children);
}

/**
 * creates an HTML ins element.
 * 
 * The element gets the 'ins' class name.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @return a ins element.
 */
export const ins = (props, ...children) => {
    const obj = document.createElement('ins');
    return initHTMLModElement(obj, addClassName(props, 'ins'), ...children);
}
