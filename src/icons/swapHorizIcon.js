import { initIcon } from "./icon.js";

//the url of the swap horiz svg; resolved relative to this module
const URL_SWAPHORIZ = new URL('../../assets/icons/swapHoriz.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap horiz icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapHoriz.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapHorizIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWAPHORIZ }, ...properties);
}

/**
 * Creates a swap horiz icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapHorizIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapHorizIcon(element, ...properties);
    return element;
}
