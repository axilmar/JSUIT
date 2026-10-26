import { initIcon } from "./icon.js";

//the url of the edgesensor low svg; resolved relative to this module
const URL_EDGESENSORLOW = new URL('../../assets/icons/edgesensorLow.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edgesensor low icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/edgesensorLow.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEdgesensorLowIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDGESENSORLOW }, ...properties);
}

/**
 * Creates an edgesensor low icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const edgesensorLowIcon = (...properties) => {
    const element = document.createElement('div');
    initEdgesensorLowIcon(element, ...properties);
    return element;
}
