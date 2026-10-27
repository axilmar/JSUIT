import { initIcon } from "./icon.js";

//the url of the dvr svg; resolved relative to this module
const URL_DVR = new URL('../../assets/icons/dvr.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dvr icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dvr.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDvrIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dvrIcon', url: URL_DVR }, ...properties);
}

/**
 * Creates a dvr icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dvrIcon = (...properties) => {
    const element = document.createElement('div');
    initDvrIcon(element, ...properties);
    return element;
}
