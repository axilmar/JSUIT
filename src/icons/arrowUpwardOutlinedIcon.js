import { initIcon } from "./icon.js";

//the url of the arrow upward outlined svg; resolved relative to this module
const URL_ARROWUPWARDOUTLINED = new URL('../../assets/icons/arrowUpwardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow upward outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowUpwardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowUpwardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowUpwardOutlinedIcon', url: URL_ARROWUPWARDOUTLINED }, ...properties);
}

/**
 * Creates an arrow upward outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowUpwardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowUpwardOutlinedIcon(element, ...properties);
    return element;
}
