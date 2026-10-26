import { initIcon } from "./icon.js";

//the url of the six k outlined svg; resolved relative to this module
const URL_SIXKOUTLINED = new URL('../../assets/icons/sixKOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a six k outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixKOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixKOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIXKOUTLINED }, ...properties);
}

/**
 * Creates a six k outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixKOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSixKOutlinedIcon(element, ...properties);
    return element;
}
