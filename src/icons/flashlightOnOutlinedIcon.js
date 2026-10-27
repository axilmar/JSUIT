import { initIcon } from "./icon.js";

//the url of the flashlight on outlined svg; resolved relative to this module
const URL_FLASHLIGHTONOUTLINED = new URL('../../assets/icons/flashlightOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flashlight on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashlightOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashlightOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flashlightOnOutlinedIcon', url: URL_FLASHLIGHTONOUTLINED }, ...properties);
}

/**
 * Creates a flashlight on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashlightOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashlightOnOutlinedIcon(element, ...properties);
    return element;
}
