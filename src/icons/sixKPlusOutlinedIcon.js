import { initIcon } from "./icon.js";

//the url of the six k plus outlined svg; resolved relative to this module
const URL_SIXKPLUSOUTLINED = new URL('../../assets/icons/sixKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a six k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIXKPLUSOUTLINED }, ...properties);
}

/**
 * Creates a six k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSixKPlusOutlinedIcon(element, ...properties);
    return element;
}
