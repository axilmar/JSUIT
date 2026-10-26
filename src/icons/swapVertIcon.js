import { initIcon } from "./icon.js";

//the url of the swap vert svg; resolved relative to this module
const URL_SWAPVERT = new URL('../../assets/icons/swapVert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap vert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapVert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapVertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWAPVERT }, ...properties);
}

/**
 * Creates a swap vert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapVertIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapVertIcon(element, ...properties);
    return element;
}
