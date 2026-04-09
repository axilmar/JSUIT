import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLLegendElement, addClassName } from "./util.js";

/**
 * Initializes an HTML legend element.
 * 
 * The element gets the 'HTMLLegendElement' and 'legend' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLLegendElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLLegendElement(elem), 'instanceof HTMLLegendElement');
    return initHTMLElement(elem, addClassName(props, "HTMLLegendElement legend"), ...children);
}

/**
 * creates an HTML legend element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLLegendElement = (props, ...children) => {
    const obj = document.createElement('legend');
    return initHTMLLegendElement(obj, props, ...children);
}

/**
 * creates an HTML legend element.
 * Same as `HTMLLegendElement`.
 */
export const legend = HTMLLegendElement;
