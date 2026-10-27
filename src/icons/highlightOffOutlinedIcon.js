import { initIcon } from "./icon.js";

//the url of the highlight off outlined svg; resolved relative to this module
const URL_HIGHLIGHTOFFOUTLINED = new URL('../../assets/icons/highlightOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a highlight off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highlightOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighlightOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'highlightOffOutlinedIcon', url: URL_HIGHLIGHTOFFOUTLINED }, ...properties);
}

/**
 * Creates a highlight off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highlightOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHighlightOffOutlinedIcon(element, ...properties);
    return element;
}
