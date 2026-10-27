import { initIcon } from "./icon.js";

//the url of the recent actors svg; resolved relative to this module
const URL_RECENTACTORS = new URL('../../assets/icons/recentActors.svg', import.meta.url).href;

/**
 * Initializes an icon element as a recent actors icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/recentActors.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRecentActorsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'recentActorsIcon', url: URL_RECENTACTORS }, ...properties);
}

/**
 * Creates a recent actors icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const recentActorsIcon = (...properties) => {
    const element = document.createElement('div');
    initRecentActorsIcon(element, ...properties);
    return element;
}
