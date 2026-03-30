import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLAreaElement, addClassName } from "./util.js";

const defineProperties = (elem) => {
    Object.defineProperty(elem, "value", {
        get: function () { return this.href; },
        set: function (v) { this.href = v; }
    });    
}

/**
 * Initializes an HTML area element.
 * 
 * The element gets the 'HTMLAreaElement' and 'area' class names.
 * 
 * A 'value' property is added to the object, which is equivalent to the 'href' property.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLAreaElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLAreaElement(elem), 'instanceof HTMLAreaElement');
    defineProperties(elem);
    return initHTMLElement(elem, addClassName(props, "HTMLAreaElement area"), children);
}

/**
 * creates an HTML area element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLAreaElement = (props, children) => {
    const obj = document.createElement('area');
    return initHTMLAreaElement(obj, props, children);
}

/**
 * creates an HTML area element.
 * Same as `HTMLAreaElement`.
 */
export const area = HTMLAreaElement;
