import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLQuoteElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLQuoteElement = (element, ...properties) => {
    console.assert(element instanceof HTMLQuoteElement);
    initHTMLElement(element, { additionalClassName: 'HTMLQuoteElement' }, ...properties);
}

/**
 * Creates an instance of HTMLQuoteElement for tag 'blockquote'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const blockquote = (...properties) => {
    const element = document.createElement('blockquote');
    initHTMLQuoteElement(element, { additionalClassName: 'blockquote' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLQuoteElement for tag 'q'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const q = (...properties) => {
    const element = document.createElement('q');
    initHTMLQuoteElement(element, { additionalClassName: 'q' }, ...properties);
    return element;
}
