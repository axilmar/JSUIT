import { initIcon } from "./icon.js";

//the url of the bakery dining svg; resolved relative to this module
const URL_BAKERYDINING = new URL('../../assets/icons/bakeryDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bakery dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bakeryDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBakeryDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BAKERYDINING }, ...properties);
}

/**
 * Creates a bakery dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bakeryDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initBakeryDiningIcon(element, ...properties);
    return element;
}
