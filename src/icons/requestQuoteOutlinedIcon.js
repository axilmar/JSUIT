import { initIcon } from "./icon.js";

//the url of the request quote outlined svg; resolved relative to this module
const URL_REQUESTQUOTEOUTLINED = new URL('../../assets/icons/requestQuoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a request quote outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/requestQuoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRequestQuoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'requestQuoteOutlinedIcon', url: URL_REQUESTQUOTEOUTLINED }, ...properties);
}

/**
 * Creates a request quote outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const requestQuoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRequestQuoteOutlinedIcon(element, ...properties);
    return element;
}
