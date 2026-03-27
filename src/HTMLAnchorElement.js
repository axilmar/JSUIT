import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLAnchorElement, addClassName } from "./util.js";

const defineProperties = (elem) => {
    Object.defineProperty(elem, "value", {
        get: function () { return this.href; },
        set: function (v) { this.href = v; }
    });    
}

/**
 * Initializes an HTML anchor element.
 * 
 * The element gets the 'HTMLAnchorElement' and 'a' class names.
 * 
 * A 'value' property is added to the object, which is equivalent to the 'href' property.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLAnchorElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLAnchorElement(elem));
    defineProperties(elem);
    return initHTMLElement(elem, addClassName(props, "HTMLAnchorElement a"), children);
}

/**
 * creates an HTML anchor element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLAnchorElement = (props, children) => {
    const obj = document.createElement('a');
    return initHTMLAnchorElement(obj, props, children);
}

/**
 * creates an HTML anchor element.
 * Same as `HTMLAnchorElement`.
 */
export const a = HTMLAnchorElement;
