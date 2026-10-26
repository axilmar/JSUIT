import { initIcon } from "./icon.js";

//the url of the two k plus outlined svg; resolved relative to this module
const URL_TWOKPLUSOUTLINED = new URL('../../assets/icons/twoKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a two k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twoKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwoKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TWOKPLUSOUTLINED }, ...properties);
}

/**
 * Creates a two k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twoKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwoKPlusOutlinedIcon(element, ...properties);
    return element;
}
