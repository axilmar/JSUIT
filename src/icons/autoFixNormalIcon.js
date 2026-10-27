import { initIcon } from "./icon.js";

//the url of the auto fix normal svg; resolved relative to this module
const URL_AUTOFIXNORMAL = new URL('../../assets/icons/autoFixNormal.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto fix normal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoFixNormal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoFixNormalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoFixNormalIcon', url: URL_AUTOFIXNORMAL }, ...properties);
}

/**
 * Creates an auto fix normal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoFixNormalIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoFixNormalIcon(element, ...properties);
    return element;
}
