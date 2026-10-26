import { initIcon } from "./icon.js";

//the url of the west outlined svg; resolved relative to this module
const URL_WESTOUTLINED = new URL('../../assets/icons/westOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a west outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/westOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWestOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WESTOUTLINED }, ...properties);
}

/**
 * Creates a west outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const westOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWestOutlinedIcon(element, ...properties);
    return element;
}
