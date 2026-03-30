import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLMediaElement, addClassName } from "./util.js";

const defineProperties = (elem) => {
    Object.defineProperty(elem, "value", {
        get: function () { return this.src; },
        set: function (v) { this.src = v; }
    });    
}

/**
 * Initializes an HTML media element.
 * 
 * The element gets the 'HTMLMediaElement' and 'media' class names.
 * 
 * A 'value' property is added to the object, which is equivalent to the 'src' property.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLMediaElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLMediaElement(elem), 'instanceof HTMLMediaElement');
    defineProperties(elem);
    return initHTMLElement(elem, addClassName(props, "HTMLMediaElement media"), children);
}
