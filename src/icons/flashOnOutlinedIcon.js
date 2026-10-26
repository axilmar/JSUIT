import { initIcon } from "./icon.js";

//the url of the flash on outlined svg; resolved relative to this module
const URL_FLASHONOUTLINED = new URL('../../assets/icons/flashOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flash on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLASHONOUTLINED }, ...properties);
}

/**
 * Creates a flash on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashOnOutlinedIcon(element, ...properties);
    return element;
}
