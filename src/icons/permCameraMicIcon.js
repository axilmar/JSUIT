import { initIcon } from "./icon.js";

//the url of the perm camera mic svg; resolved relative to this module
const URL_PERMCAMERAMIC = new URL('../../assets/icons/permCameraMic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm camera mic icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permCameraMic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermCameraMicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERMCAMERAMIC }, ...properties);
}

/**
 * Creates a perm camera mic icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permCameraMicIcon = (...properties) => {
    const element = document.createElement('div');
    initPermCameraMicIcon(element, ...properties);
    return element;
}
