import { initIcon } from "./icon.js";

//the url of the radio svg; resolved relative to this module
const URL_RADIO = new URL('../../assets/icons/radio.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radio icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radio.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RADIO }, ...properties);
}

/**
 * Creates a radio icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radioIcon = (...properties) => {
    const element = document.createElement('div');
    initRadioIcon(element, ...properties);
    return element;
}
