import { initEventTarget } from "./EventTarget.js";

/**
 * Initializes a node object.
 * 
 * It invokes the function `initEventTarget(node, ...properties)`.
 * 
 * @param {*} node the node to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNode = (node, ...properties) => {
    console.assert(node instanceof Node);
    initEventTarget(node, ...properties);
}
