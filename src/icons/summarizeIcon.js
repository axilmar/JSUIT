import { initIcon } from "./icon.js";

//the url of the summarize svg; resolved relative to this module
const URL_SUMMARIZE = new URL('../../assets/icons/summarize.svg', import.meta.url).href;

/**
 * Initializes an icon element as a summarize icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/summarize.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSummarizeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUMMARIZE }, ...properties);
}

/**
 * Creates a summarize icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const summarizeIcon = (...properties) => {
    const element = document.createElement('div');
    initSummarizeIcon(element, ...properties);
    return element;
}
