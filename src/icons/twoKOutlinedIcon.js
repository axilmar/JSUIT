import { initIcon } from "./icon.js";

//the url of the two k outlined svg; resolved relative to this module
const URL_TWOKOUTLINED = new URL('../../assets/icons/twoKOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a two k outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twoKOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwoKOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twoKOutlinedIcon', url: URL_TWOKOUTLINED }, ...properties);
}

/**
 * Creates a two k outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twoKOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwoKOutlinedIcon(element, ...properties);
    return element;
}
