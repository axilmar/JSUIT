import { initIcon } from "./icon.js";

//the url of the looks two svg; resolved relative to this module
const URL_LOOKSTWO = new URL('../../assets/icons/looksTwo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks two icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looksTwo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooksTwoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOOKSTWO }, ...properties);
}

/**
 * Creates a looks two icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looksTwoIcon = (...properties) => {
    const element = document.createElement('div');
    initLooksTwoIcon(element, ...properties);
    return element;
}
