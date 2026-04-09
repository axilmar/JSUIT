import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLLabelElement, getHTMLLabelElementControlPropertyDescriptor, addClassName } from "./util.js";

const controlPropertyDescriptor = getHTMLLabelElementControlPropertyDescriptor();

const defineProperties = (elem) => {
    Object.defineProperty(elem, 'controlId', {
        get: function () {
            return this.htmlFor;
        },
        set: function (v) {
            this.htmlFor = v;
        }
    });

    Object.defineProperty(elem, 'control', {
        get: function () {
            return controlPropertyDescriptor.get.call(this);

        },
        set: function (v) {
            this.htmlFor = v.id;
        }
    });
}

/**
 * Initializes an HTML label element.
 * 
 * The element gets the 'HTMLLabelElement' and 'label' class names.
 * 
 * The element gets the 'controlId' property, which is the same as 'htmlFor'.
 * 
 * The element also makes the 'control' property writable:
 * when set, it sets the 'htmlFor' property from the control id
 * (or resets the 'htmlFor' to its initial value, if the control is undefined or null).
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLLabelElement = (elem, props, ...children) => {
    console.assert(isInstanceOfHTMLLabelElement(elem), 'instanceof HTMLLabelElement');
    defineProperties(elem);
    return initHTMLElement(elem, addClassName(props, "HTMLLabelElement label"), ...children);
}

/**
 * creates an HTML label element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLLabelElement = (props, ...children) => {
    const obj = document.createElement('label');
    return initHTMLLabelElement(obj, props, ...children);
}

/**
 * creates an HTML label element.
 * Same as `HTMLLabelElement`.
 */
export const label = HTMLLabelElement;
