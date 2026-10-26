import { initIcon } from "./icon.js";

//the url of the straighten svg; resolved relative to this module
const URL_STRAIGHTEN = new URL('../../assets/icons/straighten.svg', import.meta.url).href;

/**
 * Initializes an icon element as a straighten icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/straighten.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStraightenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STRAIGHTEN }, ...properties);
}

/**
 * Creates a straighten icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const straightenIcon = (...properties) => {
    const element = document.createElement('div');
    initStraightenIcon(element, ...properties);
    return element;
}
