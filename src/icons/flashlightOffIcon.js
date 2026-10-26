import { initIcon } from "./icon.js";

//the url of the flashlight off svg; resolved relative to this module
const URL_FLASHLIGHTOFF = new URL('../../assets/icons/flashlightOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flashlight off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashlightOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashlightOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLASHLIGHTOFF }, ...properties);
}

/**
 * Creates a flashlight off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashlightOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashlightOffIcon(element, ...properties);
    return element;
}
