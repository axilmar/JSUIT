import { initIcon } from "./icon.js";

//the url of the flashlight on svg; resolved relative to this module
const URL_FLASHLIGHTON = new URL('../../assets/icons/flashlightOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flashlight on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashlightOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashlightOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLASHLIGHTON }, ...properties);
}

/**
 * Creates a flashlight on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashlightOnIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashlightOnIcon(element, ...properties);
    return element;
}
