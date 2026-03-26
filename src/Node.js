import { initEventTarget } from "./EventTarget.js";
import { isInstanceOfNode } from "./util.js";

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

    //if the 'parent' property is set, then add the given node to the parent,
    //either by 'append' or 'appendChild'; remove the parent property.
    if (props?.parent) {
        props.parent.append?.(node) ?? props.parent.appendChild?.(node);
        props = {...props, parent: undefined};
    }

    //append children
    if (children) {
        for(const child of children) {
            node.appendChild(child);
        }
    }

    return initEventTarget(node, props);
}
