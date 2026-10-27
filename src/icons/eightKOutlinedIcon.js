import { initIcon } from "./icon.js";

//the url of the eight k outlined svg; resolved relative to this module
const URL_EIGHTKOUTLINED = new URL('../../assets/icons/eightKOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eight k outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightKOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightKOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eightKOutlinedIcon', url: URL_EIGHTKOUTLINED }, ...properties);
}

/**
 * Creates an eight k outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightKOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEightKOutlinedIcon(element, ...properties);
    return element;
}
