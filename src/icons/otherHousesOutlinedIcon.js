import { initIcon } from "./icon.js";

//the url of the other houses outlined svg; resolved relative to this module
const URL_OTHERHOUSESOUTLINED = new URL('../../assets/icons/otherHousesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an other houses outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/otherHousesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOtherHousesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OTHERHOUSESOUTLINED }, ...properties);
}

/**
 * Creates an other houses outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const otherHousesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOtherHousesOutlinedIcon(element, ...properties);
    return element;
}
