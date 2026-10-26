import { initIcon } from "./icon.js";

//the url of the swap calls svg; resolved relative to this module
const URL_SWAPCALLS = new URL('../../assets/icons/swapCalls.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap calls icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapCalls.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapCallsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWAPCALLS }, ...properties);
}

/**
 * Creates a swap calls icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapCallsIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapCallsIcon(element, ...properties);
    return element;
}
