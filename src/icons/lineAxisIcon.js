import { initIcon } from "./icon.js";

//the url of the line axis svg; resolved relative to this module
const URL_LINEAXIS = new URL('../../assets/icons/lineAxis.svg', import.meta.url).href;

/**
 * Initializes an icon element as a line axis icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lineAxis.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLineAxisIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lineAxisIcon', url: URL_LINEAXIS }, ...properties);
}

/**
 * Creates a line axis icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lineAxisIcon = (...properties) => {
    const element = document.createElement('div');
    initLineAxisIcon(element, ...properties);
    return element;
}
