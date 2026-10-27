import { initIcon } from "./icon.js";

//the url of the blinds svg; resolved relative to this module
const URL_BLINDS = new URL('../../assets/icons/blinds.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blinds icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blinds.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlindsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blindsIcon', url: URL_BLINDS }, ...properties);
}

/**
 * Creates a blinds icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blindsIcon = (...properties) => {
    const element = document.createElement('div');
    initBlindsIcon(element, ...properties);
    return element;
}
