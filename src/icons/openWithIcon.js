import { initIcon } from "./icon.js";

//the url of the open with svg; resolved relative to this module
const URL_OPENWITH = new URL('../../assets/icons/openWith.svg', import.meta.url).href;

/**
 * Initializes an icon element as an open with icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/openWith.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpenWithIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OPENWITH }, ...properties);
}

/**
 * Creates an open with icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const openWithIcon = (...properties) => {
    const element = document.createElement('div');
    initOpenWithIcon(element, ...properties);
    return element;
}
