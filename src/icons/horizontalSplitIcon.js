import { initIcon } from "./icon.js";

//the url of the horizontal split svg; resolved relative to this module
const URL_HORIZONTALSPLIT = new URL('../../assets/icons/horizontalSplit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a horizontal split icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/horizontalSplit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHorizontalSplitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HORIZONTALSPLIT }, ...properties);
}

/**
 * Creates a horizontal split icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const horizontalSplitIcon = (...properties) => {
    const element = document.createElement('div');
    initHorizontalSplitIcon(element, ...properties);
    return element;
}
