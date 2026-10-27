import { initIcon } from "./icon.js";

//the url of the agriculture svg; resolved relative to this module
const URL_AGRICULTURE = new URL('../../assets/icons/agriculture.svg', import.meta.url).href;

/**
 * Initializes an icon element as an agriculture icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/agriculture.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAgricultureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'agricultureIcon', url: URL_AGRICULTURE }, ...properties);
}

/**
 * Creates an agriculture icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const agricultureIcon = (...properties) => {
    const element = document.createElement('div');
    initAgricultureIcon(element, ...properties);
    return element;
}
