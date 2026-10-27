import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableSectionElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLTableSectionElement = (element, ...properties) => {
    console.assert(element instanceof HTMLTableSectionElement);
    initHTMLElement(element, { additionalClassName: 'HTMLTableSectionElement' }, ...properties);
}

/**
 * Creates an instance of HTMLTableSectionElement for tag 'thead'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const thead = (...properties) => {
    const element = document.createElement('thead');
    initHTMLTableSectionElement(element, { additionalClassName: 'thead' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLTableSectionElement for tag 'tbody'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const tbody = (...properties) => {
    const element = document.createElement('tbody');
    initHTMLTableSectionElement(element, { additionalClassName: 'tbody' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLTableSectionElement for tag 'tfoot'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const tfoot = (...properties) => {
    const element = document.createElement('tfoot');
    initHTMLTableSectionElement(element, { additionalClassName: 'tfoot' }, ...properties);
    return element;
}
