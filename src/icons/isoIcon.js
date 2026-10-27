import { initIcon } from "./icon.js";

//the url of the iso svg; resolved relative to this module
const URL_ISO = new URL('../../assets/icons/iso.svg', import.meta.url).href;

/**
 * Initializes an icon element as an iso icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/iso.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIsoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'isoIcon', url: URL_ISO }, ...properties);
}

/**
 * Creates an iso icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const isoIcon = (...properties) => {
    const element = document.createElement('div');
    initIsoIcon(element, ...properties);
    return element;
}
