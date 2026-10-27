import { initIcon } from "./icon.js";

//the url of the flash off outlined svg; resolved relative to this module
const URL_FLASHOFFOUTLINED = new URL('../../assets/icons/flashOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flash off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flashOffOutlinedIcon', url: URL_FLASHOFFOUTLINED }, ...properties);
}

/**
 * Creates a flash off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashOffOutlinedIcon(element, ...properties);
    return element;
}
