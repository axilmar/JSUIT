import { initIcon } from "./icon.js";

//the url of the shuffle svg; resolved relative to this module
const URL_SHUFFLE = new URL('../../assets/icons/shuffle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shuffle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shuffle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShuffleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHUFFLE }, ...properties);
}

/**
 * Creates a shuffle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shuffleIcon = (...properties) => {
    const element = document.createElement('div');
    initShuffleIcon(element, ...properties);
    return element;
}
