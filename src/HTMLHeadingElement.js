import { initHTMLElement } from "./HTMLElement.js";
import { isInstanceOfHTMLHeadingElement, addClassName, makeEnum } from "./util.js";

/**
 * An enumeration with the allowed heading types.
 */
export const HeadingType = makeEnum({
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6"
});

/**
 * Initializes an HTML heading element.
 * 
 * The element gets the 'HTMLHeadingElement' and 'h1'/'h2'/etc class names, depending on `props.type`.
 * 
 * @param {*} elem the element to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const initHTMLHeadingElement = (elem, props, children) => {
    console.assert(HeadingType.hasValue(props.type));
    console.assert(isInstanceOfHTMLHeadingElement(elem));
    return initHTMLElement(elem, addClassName(props, `HTMLHeadingElement ${props.type}`), children);
}

/**
 * creates an HTML heading element.
 * 
 * The properties must contain a type property that has one of the values specified in the heading type parameter.
 * The heading type is used for creating the appropriate heading.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const HTMLHeadingElement = (props, children) => {
    console.assert(HeadingType.hasValue(props.type));
    const obj = document.createElement(props.type);
    return initHTMLHeadingElement(obj, props, children);
}

/**
 * creates an HTML heading element.
 * Same as `HTMLHeadingElement`.
 */
export const heading = HTMLHeadingElement;

/**
 * creates an h1 heading element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const h1 = (props, children) => {
    return heading({type: HeadingType.H1, ...props}, children);
}

/**
 * creates an h2 heading element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const h2 = (props, children) => {
    return heading({type: HeadingType.H2, ...props}, children);
}

/**
 * creates an h3 heading element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const h3 = (props, children) => {
    return heading({type: HeadingType.H3, ...props}, children);
}

/**
 * creates an h4 heading element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const h4 = (props, children) => {
    return heading({type: HeadingType.H4, ...props}, children);
}

/**
 * creates an h5 heading element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const h5 = (props, children) => {
    return heading({type: HeadingType.H5, ...props}, children);
}

/**
 * creates an h6 heading element.
 * 
 * @param {*} props the properties object.
 * @param {*} children array of nodes/strings to add to this node as children.
 * 
 * @returns the element.
 */
export const h6 = (props, children) => {
    return heading({type: HeadingType.H6, ...props}, children);
}
