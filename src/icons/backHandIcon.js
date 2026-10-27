import { initIcon } from "./icon.js";

//the url of the back hand svg; resolved relative to this module
const URL_BACKHAND = new URL('../../assets/icons/backHand.svg', import.meta.url).href;

/**
 * Initializes an icon element as a back hand icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backHand.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackHandIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'backHandIcon', url: URL_BACKHAND }, ...properties);
}

/**
 * Creates a back hand icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backHandIcon = (...properties) => {
    const element = document.createElement('div');
    initBackHandIcon(element, ...properties);
    return element;
}
