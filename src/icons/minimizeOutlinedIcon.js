import { initIcon } from "./icon.js";

//the url of the minimize outlined svg; resolved relative to this module
const URL_MINIMIZEOUTLINED = new URL('../../assets/icons/minimizeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a minimize outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/minimizeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMinimizeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'minimizeOutlinedIcon', url: URL_MINIMIZEOUTLINED }, ...properties);
}

/**
 * Creates a minimize outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const minimizeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMinimizeOutlinedIcon(element, ...properties);
    return element;
}
