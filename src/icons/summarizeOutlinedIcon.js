import { initIcon } from "./icon.js";

//the url of the summarize outlined svg; resolved relative to this module
const URL_SUMMARIZEOUTLINED = new URL('../../assets/icons/summarizeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a summarize outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/summarizeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSummarizeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'summarizeOutlinedIcon', url: URL_SUMMARIZEOUTLINED }, ...properties);
}

/**
 * Creates a summarize outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const summarizeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSummarizeOutlinedIcon(element, ...properties);
    return element;
}
