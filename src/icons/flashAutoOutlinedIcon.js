import { initIcon } from "./icon.js";

//the url of the flash auto outlined svg; resolved relative to this module
const URL_FLASHAUTOOUTLINED = new URL('../../assets/icons/flashAutoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flash auto outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashAutoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashAutoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flashAutoOutlinedIcon', url: URL_FLASHAUTOOUTLINED }, ...properties);
}

/**
 * Creates a flash auto outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashAutoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashAutoOutlinedIcon(element, ...properties);
    return element;
}
