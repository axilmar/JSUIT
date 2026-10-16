import { initNode } from "./Node.js";

/**
 * Initializes an element.
 * 
 * It invokes the function `initNode(element, ...properties)`.
 * 
 * @param {*} element the node to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElement = (element, ...properties) => {
    console.assert(element instanceof Element);
    initNode(element, ...properties);
}
