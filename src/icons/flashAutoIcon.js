import { initIcon } from "./icon.js";

//the url of the flash auto svg; resolved relative to this module
const URL_FLASHAUTO = new URL('../../assets/icons/flashAuto.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flash auto icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashAuto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashAutoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLASHAUTO }, ...properties);
}

/**
 * Creates a flash auto icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashAutoIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashAutoIcon(element, ...properties);
    return element;
}
