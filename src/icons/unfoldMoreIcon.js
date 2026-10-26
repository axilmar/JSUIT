import { initIcon } from "./icon.js";

//the url of the unfold more svg; resolved relative to this module
const URL_UNFOLDMORE = new URL('../../assets/icons/unfoldMore.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unfold more icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unfoldMore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnfoldMoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UNFOLDMORE }, ...properties);
}

/**
 * Creates an unfold more icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unfoldMoreIcon = (...properties) => {
    const element = document.createElement('div');
    initUnfoldMoreIcon(element, ...properties);
    return element;
}
