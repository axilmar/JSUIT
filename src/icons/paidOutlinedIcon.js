import { initIcon } from "./icon.js";

//the url of the paid outlined svg; resolved relative to this module
const URL_PAIDOUTLINED = new URL('../../assets/icons/paidOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a paid outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/paidOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaidOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAIDOUTLINED }, ...properties);
}

/**
 * Creates a paid outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paidOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPaidOutlinedIcon(element, ...properties);
    return element;
}
