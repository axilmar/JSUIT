import { initIcon } from "./icon.js";

//the url of the info svg; resolved relative to this module
const URL_INFO = new URL('../../assets/icons/info.svg', import.meta.url).href;

/**
 * Initializes an icon element as an info icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/info.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInfoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'infoIcon', url: URL_INFO }, ...properties);
}

/**
 * Creates an info icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const infoIcon = (...properties) => {
    const element = document.createElement('div');
    initInfoIcon(element, ...properties);
    return element;
}
