import { initIcon } from "./icon.js";

//the url of the flash on svg; resolved relative to this module
const URL_FLASHON = new URL('../../assets/icons/flashOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flash on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flashOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlashOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flashOnIcon', url: URL_FLASHON }, ...properties);
}

/**
 * Creates a flash on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flashOnIcon = (...properties) => {
    const element = document.createElement('div');
    initFlashOnIcon(element, ...properties);
    return element;
}
