import { initIcon } from "./icon.js";

//the url of the eject svg; resolved relative to this module
const URL_EJECT = new URL('../../assets/icons/eject.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eject icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eject.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEjectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EJECT }, ...properties);
}

/**
 * Creates an eject icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ejectIcon = (...properties) => {
    const element = document.createElement('div');
    initEjectIcon(element, ...properties);
    return element;
}
