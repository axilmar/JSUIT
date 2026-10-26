import { initIcon } from "./icon.js";

//the url of the no flash svg; resolved relative to this module
const URL_NOFLASH = new URL('../../assets/icons/noFlash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no flash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noFlash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoFlashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOFLASH }, ...properties);
}

/**
 * Creates a no flash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noFlashIcon = (...properties) => {
    const element = document.createElement('div');
    initNoFlashIcon(element, ...properties);
    return element;
}
