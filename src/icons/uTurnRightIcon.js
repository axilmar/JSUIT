import { initIcon } from "./icon.js";

//the url of the u turn right svg; resolved relative to this module
const URL_UTURNRIGHT = new URL('../../assets/icons/uTurnRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as an u turn right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/uTurnRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUTurnRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UTURNRIGHT }, ...properties);
}

/**
 * Creates an u turn right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const uTurnRightIcon = (...properties) => {
    const element = document.createElement('div');
    initUTurnRightIcon(element, ...properties);
    return element;
}
