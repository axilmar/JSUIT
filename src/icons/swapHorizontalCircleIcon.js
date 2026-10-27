import { initIcon } from "./icon.js";

//the url of the swap horizontal circle svg; resolved relative to this module
const URL_SWAPHORIZONTALCIRCLE = new URL('../../assets/icons/swapHorizontalCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap horizontal circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapHorizontalCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapHorizontalCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swapHorizontalCircleIcon', url: URL_SWAPHORIZONTALCIRCLE }, ...properties);
}

/**
 * Creates a swap horizontal circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapHorizontalCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapHorizontalCircleIcon(element, ...properties);
    return element;
}
