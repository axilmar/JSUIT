import { initIcon } from "./icon.js";

//the url of the public svg; resolved relative to this module
const URL_PUBLIC = new URL('../../assets/icons/public.svg', import.meta.url).href;

/**
 * Initializes an icon element as a public icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/public.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PUBLIC }, ...properties);
}

/**
 * Creates a public icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publicIcon = (...properties) => {
    const element = document.createElement('div');
    initPublicIcon(element, ...properties);
    return element;
}
