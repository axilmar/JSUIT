import { initIcon } from "./icon.js";

//the url of the arrow circle down outlined svg; resolved relative to this module
const URL_ARROWCIRCLEDOWNOUTLINED = new URL('../../assets/icons/arrowCircleDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow circle down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowCircleDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowCircleDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWCIRCLEDOWNOUTLINED }, ...properties);
}

/**
 * Creates an arrow circle down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowCircleDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowCircleDownOutlinedIcon(element, ...properties);
    return element;
}
