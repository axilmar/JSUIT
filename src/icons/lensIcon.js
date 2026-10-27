import { initIcon } from "./icon.js";

//the url of the lens svg; resolved relative to this module
const URL_LENS = new URL('../../assets/icons/lens.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lens icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lens.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLensIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lensIcon', url: URL_LENS }, ...properties);
}

/**
 * Creates a lens icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lensIcon = (...properties) => {
    const element = document.createElement('div');
    initLensIcon(element, ...properties);
    return element;
}
