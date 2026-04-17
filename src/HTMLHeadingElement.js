import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLHeadingElement.
 * 
 * The element get the class 'HTMLHeadingElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLHeadingElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLHeadingElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLHeadingElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h1'.
 * 
 * The element gets the class 'h1'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const h1 = (props, ...children) => {
    props ??= {};
    props.className = `h1 ${props?.className ?? ''}`;
    const element = document.createElement('h1');
    return initHTMLHeadingElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h2'.
 * 
 * The element gets the class 'h2'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const h2 = (props, ...children) => {
    props ??= {};
    props.className = `h2 ${props?.className ?? ''}`;
    const element = document.createElement('h2');
    return initHTMLHeadingElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h3'.
 * 
 * The element gets the class 'h3'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const h3 = (props, ...children) => {
    props ??= {};
    props.className = `h3 ${props?.className ?? ''}`;
    const element = document.createElement('h3');
    return initHTMLHeadingElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h4'.
 * 
 * The element gets the class 'h4'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const h4 = (props, ...children) => {
    props ??= {};
    props.className = `h4 ${props?.className ?? ''}`;
    const element = document.createElement('h4');
    return initHTMLHeadingElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h5'.
 * 
 * The element gets the class 'h5'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const h5 = (props, ...children) => {
    props ??= {};
    props.className = `h5 ${props?.className ?? ''}`;
    const element = document.createElement('h5');
    return initHTMLHeadingElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h6'.
 * 
 * The element gets the class 'h6'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const h6 = (props, ...children) => {
    props ??= {};
    props.className = `h6 ${props?.className ?? ''}`;
    const element = document.createElement('h6');
    return initHTMLHeadingElement(element, props, ...children);
}

