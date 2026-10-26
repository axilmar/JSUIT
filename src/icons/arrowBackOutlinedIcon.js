import { initIcon } from "./icon.js";

//the url of the arrow back outlined svg; resolved relative to this module
const URL_ARROWBACKOUTLINED = new URL('../../assets/icons/arrowBackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow back outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowBackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowBackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWBACKOUTLINED }, ...properties);
}

/**
 * Creates an arrow back outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowBackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowBackOutlinedIcon(element, ...properties);
    return element;
}
