import { initIcon } from "./icon.js";

//the url of the landscape svg; resolved relative to this module
const URL_LANDSCAPE = new URL('../../assets/icons/landscape.svg', import.meta.url).href;

/**
 * Initializes an icon element as a landscape icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/landscape.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLandscapeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LANDSCAPE }, ...properties);
}

/**
 * Creates a landscape icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const landscapeIcon = (...properties) => {
    const element = document.createElement('div');
    initLandscapeIcon(element, ...properties);
    return element;
}
