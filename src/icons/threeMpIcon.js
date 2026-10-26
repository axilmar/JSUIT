import { initIcon } from "./icon.js";

//the url of the three mp svg; resolved relative to this module
const URL_THREEMP = new URL('../../assets/icons/threeMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEMP }, ...properties);
}

/**
 * Creates a three mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeMpIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeMpIcon(element, ...properties);
    return element;
}
