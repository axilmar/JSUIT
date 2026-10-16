import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLHeadingElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLHeadingElement = (element, ...properties) => {
    console.assert(element instanceof HTMLHeadingElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h1'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const h1 = (...properties) => {
    const element = document.createElement('h1');
    initHTMLHeadingElement(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h2'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const h2 = (...properties) => {
    const element = document.createElement('h2');
    initHTMLHeadingElement(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h3'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const h3 = (...properties) => {
    const element = document.createElement('h3');
    initHTMLHeadingElement(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h4'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const h4 = (...properties) => {
    const element = document.createElement('h4');
    initHTMLHeadingElement(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h5'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const h5 = (...properties) => {
    const element = document.createElement('h5');
    initHTMLHeadingElement(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLHeadingElement for tag 'h6'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const h6 = (...properties) => {
    const element = document.createElement('h6');
    initHTMLHeadingElement(element, ...properties);
    return element;
}
