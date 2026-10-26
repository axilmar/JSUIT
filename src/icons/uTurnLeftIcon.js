import { initIcon } from "./icon.js";

//the url of the u turn left svg; resolved relative to this module
const URL_UTURNLEFT = new URL('../../assets/icons/uTurnLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as an u turn left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/uTurnLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUTurnLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UTURNLEFT }, ...properties);
}

/**
 * Creates an u turn left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const uTurnLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initUTurnLeftIcon(element, ...properties);
    return element;
}
