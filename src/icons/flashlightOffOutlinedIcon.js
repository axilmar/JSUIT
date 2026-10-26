import { initIcon } from "./icon.js";

//the url of the flashlight off outlined svg; resolved relative to this module
const URL_FLASHLIGHTOFFOUTLINED = new URL('../../assets/icons/flashlightOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flashlight off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashlightOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashlightOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLASHLIGHTOFFOUTLINED }, ...properties);
}

/**
 * Creates a flashlight off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashlightOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashlightOffOutlinedIcon(element, ...properties);
    return element;
}
