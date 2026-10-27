import { initIcon } from "./icon.js";

//the url of the one k plus outlined svg; resolved relative to this module
const URL_ONEKPLUSOUTLINED = new URL('../../assets/icons/oneKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an one k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/oneKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOneKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'oneKPlusOutlinedIcon', url: URL_ONEKPLUSOUTLINED }, ...properties);
}

/**
 * Creates an one k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const oneKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOneKPlusOutlinedIcon(element, ...properties);
    return element;
}
