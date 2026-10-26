import { initIcon } from "./icon.js";

//the url of the hd svg; resolved relative to this module
const URL_HD = new URL('../../assets/icons/hd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hd icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HD }, ...properties);
}

/**
 * Creates a hd icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdIcon = (...properties) => {
    const element = document.createElement('div');
    initHdIcon(element, ...properties);
    return element;
}
