import { initIcon } from "./icon.js";

//the url of the arrow right alt outlined svg; resolved relative to this module
const URL_ARROWRIGHTALTOUTLINED = new URL('../../assets/icons/arrowRightAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow right alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowRightAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowRightAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWRIGHTALTOUTLINED }, ...properties);
}

/**
 * Creates an arrow right alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowRightAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowRightAltOutlinedIcon(element, ...properties);
    return element;
}
