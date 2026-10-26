import { initIcon } from "./icon.js";

//the url of the margin svg; resolved relative to this module
const URL_MARGIN = new URL('../../assets/icons/margin.svg', import.meta.url).href;

/**
 * Initializes an icon element as a margin icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/margin.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarginIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARGIN }, ...properties);
}

/**
 * Creates a margin icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const marginIcon = (...properties) => {
    const element = document.createElement('div');
    initMarginIcon(element, ...properties);
    return element;
}
