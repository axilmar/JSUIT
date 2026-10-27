import { initIcon } from "./icon.js";

//the url of the swap vertical circle svg; resolved relative to this module
const URL_SWAPVERTICALCIRCLE = new URL('../../assets/icons/swapVerticalCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a swap vertical circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/swapVerticalCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwapVerticalCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'swapVerticalCircleIcon', url: URL_SWAPVERTICALCIRCLE }, ...properties);
}

/**
 * Creates a swap vertical circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const swapVerticalCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initSwapVerticalCircleIcon(element, ...properties);
    return element;
}
