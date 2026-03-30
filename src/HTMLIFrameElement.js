import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLIFrameElement, addClassName } from "./util.js";

const defineProperties = (elem) => {
    Object.defineProperty(elem, "value", {
        get: function () { return this.src; },
        set: function (v) { this.src = v; }
    });    
}

/**
 * Initializes an HTML iframe element.
 * 
 * The element gets the 'HTMLIFrameElement' and 'iframe' class names.
 * 
 * A 'value' property is added to the object, which is equivalent to the 'src' property.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLIFrameElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLIFrameElement(elem), 'instanceof HTMLIFrameElement');
    defineProperties(elem);
    return initHTMLElement(elem, addClassName(props, "HTMLIFrameElement iframe"), children);
}

/**
 * creates an HTML iframe element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLIFrameElement = (props, children) => {
    const obj = document.createElement('iframe');
    return initHTMLIFrameElement(obj, props, children);
}

/**
 * creates an HTML iframe element.
 * Same as `HTMLIFrameElement`.
 */
export const iframe = HTMLIFrameElement;
