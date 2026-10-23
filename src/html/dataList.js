import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDataListElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataList = (element, ...properties) => {
    console.assert(element instanceof HTMLDataListElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLDataListElement for tag 'datalist'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const dataList = (...properties) => {
    const element = document.createElement('datalist');
    initDataList(element, ...properties);
    return element;
}
