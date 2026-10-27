import { initIcon } from "./icon.js";

//the url of the gite svg; resolved relative to this module
const URL_GITE = new URL('../../assets/icons/gite.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gite icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gite.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGiteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'giteIcon', url: URL_GITE }, ...properties);
}

/**
 * Creates a gite icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const giteIcon = (...properties) => {
    const element = document.createElement('div');
    initGiteIcon(element, ...properties);
    return element;
}
