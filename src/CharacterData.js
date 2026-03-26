import { initNode } from "./Node.js";
import { isInstanceOfCharacterData } from "./util.js";

/**
 * Initializes a character data node.
 * 
 * A 'value' property is added to the object, which is equivalent to the 'data' property.
 * 
 * @param {*} node the node object to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes to add to this node as children.
 * 
 * @returns the node object.
 */
export const initCharacterData = (node, props, children) => {
    console.assert(isInstanceOfCharacterData(node));

    //add the value property
    Object.defineProperty(node, "value", {
        get: function () { return this.data; },
        set: function (v) { this.data = v; }
    });    

    return initNode(node, props, children);
}
