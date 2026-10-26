import { initIcon } from "./icon.js";

//the url of the dinner dining svg; resolved relative to this module
const URL_DINNERDINING = new URL('../../assets/icons/dinnerDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dinner dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dinnerDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDinnerDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DINNERDINING }, ...properties);
}

/**
 * Creates a dinner dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dinnerDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initDinnerDiningIcon(element, ...properties);
    return element;
}
