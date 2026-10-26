import { initIcon } from "./icon.js";

//the url of the follow the signs svg; resolved relative to this module
const URL_FOLLOWTHESIGNS = new URL('../../assets/icons/followTheSigns.svg', import.meta.url).href;

/**
 * Initializes an icon element as a follow the signs icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/followTheSigns.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFollowTheSignsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLLOWTHESIGNS }, ...properties);
}

/**
 * Creates a follow the signs icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const followTheSignsIcon = (...properties) => {
    const element = document.createElement('div');
    initFollowTheSignsIcon(element, ...properties);
    return element;
}
