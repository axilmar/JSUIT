import { initIcon } from "./icon.js";

//the url of the fiber new svg; resolved relative to this module
const URL_FIBERNEW = new URL('../../assets/icons/fiberNew.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber new icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberNew.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberNewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiberNewIcon', url: URL_FIBERNEW }, ...properties);
}

/**
 * Creates a fiber new icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberNewIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberNewIcon(element, ...properties);
    return element;
}
