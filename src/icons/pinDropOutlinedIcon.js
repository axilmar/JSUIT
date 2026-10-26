import { initIcon } from "./icon.js";

//the url of the pin drop outlined svg; resolved relative to this module
const URL_PINDROPOUTLINED = new URL('../../assets/icons/pinDropOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pin drop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pinDropOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPinDropOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PINDROPOUTLINED }, ...properties);
}

/**
 * Creates a pin drop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pinDropOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPinDropOutlinedIcon(element, ...properties);
    return element;
}
