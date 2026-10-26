import { initIcon } from "./icon.js";

//the url of the handyman svg; resolved relative to this module
const URL_HANDYMAN = new URL('../../assets/icons/handyman.svg', import.meta.url).href;

/**
 * Initializes an icon element as a handyman icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/handyman.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHandymanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HANDYMAN }, ...properties);
}

/**
 * Creates a handyman icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const handymanIcon = (...properties) => {
    const element = document.createElement('div');
    initHandymanIcon(element, ...properties);
    return element;
}
