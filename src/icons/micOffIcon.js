import { initIcon } from "./icon.js";

//the url of the mic off svg; resolved relative to this module
const URL_MICOFF = new URL('../../assets/icons/micOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICOFF }, ...properties);
}

/**
 * Creates a mic off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMicOffIcon(element, ...properties);
    return element;
}
