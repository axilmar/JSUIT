import { initIcon } from "./icon.js";

//the url of the shuffle on svg; resolved relative to this module
const URL_SHUFFLEON = new URL('../../assets/icons/shuffleOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shuffle on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shuffleOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShuffleOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHUFFLEON }, ...properties);
}

/**
 * Creates a shuffle on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shuffleOnIcon = (...properties) => {
    const element = document.createElement('div');
    initShuffleOnIcon(element, ...properties);
    return element;
}
