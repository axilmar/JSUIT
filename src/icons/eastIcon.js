import { initIcon } from "./icon.js";

//the url of the east svg; resolved relative to this module
const URL_EAST = new URL('../../assets/icons/east.svg', import.meta.url).href;

/**
 * Initializes an icon element as an east icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/east.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEastIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eastIcon', url: URL_EAST }, ...properties);
}

/**
 * Creates an east icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eastIcon = (...properties) => {
    const element = document.createElement('div');
    initEastIcon(element, ...properties);
    return element;
}
