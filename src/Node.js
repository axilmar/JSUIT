import { initEventTarget } from "./EventTarget.js";
import { isInstanceOfNode, appendChildren } from "./util.js";

/**
 * Initializes a node.
 * 
 * It initializes the event target by invoking `initEventTarget(node, props)`.
 * 
 * If a property is named 'parent', then the method 'append' or 'appendChild' of parent is used to add the given node to the parent.
 * 
 * @param {*} node the node object to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes to add to this node as children.
 * 
 * @returns the node object.
 */
export const initNode = (node, props, children) => {
    console.assert(isInstanceOfNode(node));
    appendChildren(props.parent, node);
    appendChildren(node, children);
    return initEventTarget(node, props);
}
