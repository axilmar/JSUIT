import { addClassName } from "./Element.js";
import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLImageElement } from "./util.js";

const defineProperties = (elem) => {
    Object.defineProperty(elem, "value", {
        get: function () { return this.src; },
        set: function (v) { this.src = v; }
    });    
}

/**
 * Initializes an HTML image element.
 * 
 * The element gets the 'HTMLImageElement' and 'img' class names.
 * 
 * A 'value' property is added to the object, which is equivalent to the 'src' property.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLImageElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLImageElement(elem));
    defineProperties(elem);
    return initHTMLElement(elem, addClassName(props, "HTMLImageElement img"), children);
}

/**
 * creates an HTML image element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLImageElement = (props, children) => {
    const obj = document.createElement('img');
    return initHTMLImageElement(obj, props, children);
}

/**
 * creates an HTML image element.
 * Same as `HTMLImageElement`.
 */
export const Image = HTMLImageElement;
