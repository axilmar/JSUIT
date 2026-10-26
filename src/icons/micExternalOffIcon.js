import { initIcon } from "./icon.js";

//the url of the mic external off svg; resolved relative to this module
const URL_MICEXTERNALOFF = new URL('../../assets/icons/micExternalOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic external off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micExternalOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicExternalOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICEXTERNALOFF }, ...properties);
}

/**
 * Creates a mic external off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micExternalOffIcon = (...properties) => {
    const element = document.createElement('div');
    initMicExternalOffIcon(element, ...properties);
    return element;
}
