import { initIcon } from "./icon.js";

//the url of the looks svg; resolved relative to this module
const URL_LOOKS = new URL('../../assets/icons/looks.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looks.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooksIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'looksIcon', url: URL_LOOKS }, ...properties);
}

/**
 * Creates a looks icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looksIcon = (...properties) => {
    const element = document.createElement('div');
    initLooksIcon(element, ...properties);
    return element;
}
