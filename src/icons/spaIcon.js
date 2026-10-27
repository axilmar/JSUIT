import { initIcon } from "./icon.js";

//the url of the spa svg; resolved relative to this module
const URL_SPA = new URL('../../assets/icons/spa.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spa icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spa.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'spaIcon', url: URL_SPA }, ...properties);
}

/**
 * Creates a spa icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spaIcon = (...properties) => {
    const element = document.createElement('div');
    initSpaIcon(element, ...properties);
    return element;
}
