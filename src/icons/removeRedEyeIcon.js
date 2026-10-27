import { initIcon } from "./icon.js";

//the url of the remove red eye svg; resolved relative to this module
const URL_REMOVEREDEYE = new URL('../../assets/icons/removeRedEye.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove red eye icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeRedEye.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveRedEyeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeRedEyeIcon', url: URL_REMOVEREDEYE }, ...properties);
}

/**
 * Creates a remove red eye icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeRedEyeIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveRedEyeIcon(element, ...properties);
    return element;
}
