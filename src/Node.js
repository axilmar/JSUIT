import { initEventTarget } from "./EventTarget.js";
import { isInstanceOfNode, appendChildren, isString } from "./util.js";

const initMethods = (node) => {
    node.append = function (...children) {
        for(const child of children) {
            if (isString(child)) {
                this.appendChild(document.createTextNode(child));
            }
            else {
                this.appendChild(child);
            }
        }
    }
}

/**
 * Initializes a node.
 * 
 * It initializes the event target by invoking `initEventTarget(node, props)`.
 * 
 * If a property is named 'parent', then the method 'append' or 'appendChild' of parent is used to add the given node to the parent.
 * 
 * It gets a method 'append' which behaves similarly to the Element's 'append' method.
 * 
 * @param {*} node the node object to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the node object.
 */
export const initNode = (node, props, children) => {
    console.assert(isInstanceOfNode(node), 'instanceof Node');
    initMethods(node);
    appendChildren(props.parent, node);
    appendChildren(node, children);
    return initEventTarget(node, props);
}
