import { initIcon } from "./icon.js";

//the url of the pentagon svg; resolved relative to this module
const URL_PENTAGON = new URL('../../assets/icons/pentagon.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pentagon icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pentagon.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPentagonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pentagonIcon', url: URL_PENTAGON }, ...properties);
}

/**
 * Creates a pentagon icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pentagonIcon = (...properties) => {
    const element = document.createElement('div');
    initPentagonIcon(element, ...properties);
    return element;
}
