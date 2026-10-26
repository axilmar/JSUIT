import { initIcon } from "./icon.js";

//the url of the portrait svg; resolved relative to this module
const URL_PORTRAIT = new URL('../../assets/icons/portrait.svg', import.meta.url).href;

/**
 * Initializes an icon element as a portrait icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/portrait.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPortraitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PORTRAIT }, ...properties);
}

/**
 * Creates a portrait icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const portraitIcon = (...properties) => {
    const element = document.createElement('div');
    initPortraitIcon(element, ...properties);
    return element;
}
