import { initIcon } from "./icon.js";

//the url of the flash off svg; resolved relative to this module
const URL_FLASHOFF = new URL('../../assets/icons/flashOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flash off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLASHOFF }, ...properties);
}

/**
 * Creates a flash off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashOffIcon(element, ...properties);
    return element;
}
