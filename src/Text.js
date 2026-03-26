import { initCharacterData } from "./CharacterData.js";
import { isInstanceOfText } from "./util.js";

/**
 * Initializes a text node.
 * 
 * @param {*} node the node object to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes to add to this node as children.
 * 
 * @returns the node object.
 */
export const initText = (node, props, children) => {
    console.assert(isInstanceOfText(node));
    return initCharacterData(node, props, children);
}

/**
 * Creates a text node.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes to add to this node as children.
 * 
 * @returns the node object.
 */
export const Text = (props, children) => {
    const obj = document.createTextNode("");
    return initText(obj, props, children);
}
