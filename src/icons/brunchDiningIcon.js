import { initIcon } from "./icon.js";

//the url of the brunch dining svg; resolved relative to this module
const URL_BRUNCHDINING = new URL('../../assets/icons/brunchDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brunch dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brunchDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrunchDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRUNCHDINING }, ...properties);
}

/**
 * Creates a brunch dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brunchDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initBrunchDiningIcon(element, ...properties);
    return element;
}
