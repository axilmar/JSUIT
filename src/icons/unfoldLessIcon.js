import { initIcon } from "./icon.js";

//the url of the unfold less svg; resolved relative to this module
const URL_UNFOLDLESS = new URL('../../assets/icons/unfoldLess.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unfold less icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unfoldLess.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnfoldLessIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UNFOLDLESS }, ...properties);
}

/**
 * Creates an unfold less icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unfoldLessIcon = (...properties) => {
    const element = document.createElement('div');
    initUnfoldLessIcon(element, ...properties);
    return element;
}
