import { initIcon } from "./icon.js";

//the url of the arrow back ios outlined svg; resolved relative to this module
const URL_ARROWBACKIOSOUTLINED = new URL('../../assets/icons/arrowBackIosOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow back ios outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowBackIosOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowBackIosOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowBackIosOutlinedIcon', url: URL_ARROWBACKIOSOUTLINED }, ...properties);
}

/**
 * Creates an arrow back ios outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowBackIosOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowBackIosOutlinedIcon(element, ...properties);
    return element;
}
