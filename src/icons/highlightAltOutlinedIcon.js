import { initIcon } from "./icon.js";

//the url of the highlight alt outlined svg; resolved relative to this module
const URL_HIGHLIGHTALTOUTLINED = new URL('../../assets/icons/highlightAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a highlight alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highlightAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighlightAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'highlightAltOutlinedIcon', url: URL_HIGHLIGHTALTOUTLINED }, ...properties);
}

/**
 * Creates a highlight alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highlightAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHighlightAltOutlinedIcon(element, ...properties);
    return element;
}
