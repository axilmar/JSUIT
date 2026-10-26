import { initIcon } from "./icon.js";

//the url of the local dining svg; resolved relative to this module
const URL_LOCALDINING = new URL('../../assets/icons/localDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALDINING }, ...properties);
}

/**
 * Creates a local dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalDiningIcon(element, ...properties);
    return element;
}
