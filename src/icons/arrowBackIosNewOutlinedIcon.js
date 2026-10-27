import { initIcon } from "./icon.js";

//the url of the arrow back ios new outlined svg; resolved relative to this module
const URL_ARROWBACKIOSNEWOUTLINED = new URL('../../assets/icons/arrowBackIosNewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow back ios new outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowBackIosNewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowBackIosNewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowBackIosNewOutlinedIcon', url: URL_ARROWBACKIOSNEWOUTLINED }, ...properties);
}

/**
 * Creates an arrow back ios new outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowBackIosNewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowBackIosNewOutlinedIcon(element, ...properties);
    return element;
}
