import { initIcon } from "./icon.js";

//the url of the width normal svg; resolved relative to this module
const URL_WIDTHNORMAL = new URL('../../assets/icons/widthNormal.svg', import.meta.url).href;

/**
 * Initializes an icon element as a width normal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widthNormal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidthNormalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'widthNormalIcon', url: URL_WIDTHNORMAL }, ...properties);
}

/**
 * Creates a width normal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widthNormalIcon = (...properties) => {
    const element = document.createElement('div');
    initWidthNormalIcon(element, ...properties);
    return element;
}
