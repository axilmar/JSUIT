import { initIcon } from "./icon.js";

//the url of the ramen dining svg; resolved relative to this module
const URL_RAMENDINING = new URL('../../assets/icons/ramenDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ramen dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ramenDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRamenDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ramenDiningIcon', url: URL_RAMENDINING }, ...properties);
}

/**
 * Creates a ramen dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ramenDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initRamenDiningIcon(element, ...properties);
    return element;
}
