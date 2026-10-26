import { initIcon } from "./icon.js";

//the url of the raw off svg; resolved relative to this module
const URL_RAWOFF = new URL('../../assets/icons/rawOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a raw off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rawOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRawOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAWOFF }, ...properties);
}

/**
 * Creates a raw off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rawOffIcon = (...properties) => {
    const element = document.createElement('div');
    initRawOffIcon(element, ...properties);
    return element;
}
