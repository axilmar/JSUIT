import { initIcon } from "./icon.js";

//the url of the vertical split svg; resolved relative to this module
const URL_VERTICALSPLIT = new URL('../../assets/icons/verticalSplit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical split icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalSplit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalSplitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VERTICALSPLIT }, ...properties);
}

/**
 * Creates a vertical split icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalSplitIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalSplitIcon(element, ...properties);
    return element;
}
