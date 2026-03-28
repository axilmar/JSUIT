import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLCanvasElement, addClassName } from "./util.js";

const processProperties = (elem, props) => {
    if (props.width || props.height) {
        props = {...props};
        if (props.width) {
            elem.width = props.width;
        }
        if (props.height) {
            elem.height = props.height;
        }
        delete props.width;
        delete props.height;
    }
    return props;
}

/**
 * Initializes an HTML canvas element.
 * 
 * The element gets the 'HTMLCanvasElement' and 'canvas' class names.
 * 
 * The properties 'width' and 'height' are treated as canvas properties, not as style properties.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLCanvasElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLCanvasElement(elem));
    props = processProperties(elem, props);
    return initHTMLElement(elem, addClassName(props, "HTMLCanvasElement canvas"), children);
}

/**
 * creates an HTML canvas element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLCanvasElement = (props, children) => {
    const obj = document.createElement('canvas');
    return initHTMLCanvasElement(obj, props, children);
}

/**
 * creates an HTML canvas element.
 * Same as `HTMLCanvasElement`.
 */
export const canvas = HTMLCanvasElement;
