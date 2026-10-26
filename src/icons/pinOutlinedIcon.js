import { initIcon } from "./icon.js";

//the url of the pin outlined svg; resolved relative to this module
const URL_PINOUTLINED = new URL('../../assets/icons/pinOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pinOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPinOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PINOUTLINED }, ...properties);
}

/**
 * Creates a pin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pinOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPinOutlinedIcon(element, ...properties);
    return element;
}
