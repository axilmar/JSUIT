import { initIcon } from "./icon.js";

//the url of the pentagon outlined svg; resolved relative to this module
const URL_PENTAGONOUTLINED = new URL('../../assets/icons/pentagonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pentagon outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pentagonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPentagonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PENTAGONOUTLINED }, ...properties);
}

/**
 * Creates a pentagon outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pentagonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPentagonOutlinedIcon(element, ...properties);
    return element;
}
