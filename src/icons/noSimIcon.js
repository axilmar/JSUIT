import { initIcon } from "./icon.js";

//the url of the no sim svg; resolved relative to this module
const URL_NOSIM = new URL('../../assets/icons/noSim.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no sim icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noSim.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoSimIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noSimIcon', url: URL_NOSIM }, ...properties);
}

/**
 * Creates a no sim icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noSimIcon = (...properties) => {
    const element = document.createElement('div');
    initNoSimIcon(element, ...properties);
    return element;
}
