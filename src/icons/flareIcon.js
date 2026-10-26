import { initIcon } from "./icon.js";

//the url of the flare svg; resolved relative to this module
const URL_FLARE = new URL('../../assets/icons/flare.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flare icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLARE }, ...properties);
}

/**
 * Creates a flare icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flareIcon = (...properties) => {
    const element = document.createElement('div');
    initFlareIcon(element, ...properties);
    return element;
}
