import { initIcon } from "./icon.js";

//the url of the swap calls outlined svg; resolved relative to this module
const URL_SWAPCALLSOUTLINED = new URL('../../assets/icons/swapCallsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap calls outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapCallsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapCallsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWAPCALLSOUTLINED }, ...properties);
}

/**
 * Creates a swap calls outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapCallsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapCallsOutlinedIcon(element, ...properties);
    return element;
}
