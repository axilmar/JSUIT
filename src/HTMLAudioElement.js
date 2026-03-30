import { initHTMLMediaElement } from "./HTMLMediaElement.js";
import { isInstanceOfHTMLAudioElement, addClassName } from "./util.js";

/**
 * Initializes an HTML audio element.
 * 
 * The element gets the 'HTMLAudioElement' and 'audio' class names.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLAudioElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLAudioElement(elem), 'instanceof HTMLAudioElement');
    return initHTMLMediaElement(elem, addClassName(props, "HTMLAudioElement audio"), children);
}

/**
 * creates an HTML audio element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLAudioElement = (props, children) => {
    const obj = document.createElement('audio');
    return initHTMLAudioElement(obj, props, children);
}

/**
 * creates an HTML audio element.
 * Same as `HTMLAudioElement`.
 */
export const audio = HTMLAudioElement;
