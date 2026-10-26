import { initIcon } from "./icon.js";

//the url of the local cafe svg; resolved relative to this module
const URL_LOCALCAFE = new URL('../../assets/icons/localCafe.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local cafe icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localCafe.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalCafeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALCAFE }, ...properties);
}

/**
 * Creates a local cafe icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localCafeIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalCafeIcon(element, ...properties);
    return element;
}
