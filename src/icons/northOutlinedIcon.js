import { initIcon } from "./icon.js";

//the url of the north outlined svg; resolved relative to this module
const URL_NORTHOUTLINED = new URL('../../assets/icons/northOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a north outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/northOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNorthOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NORTHOUTLINED }, ...properties);
}

/**
 * Creates a north outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const northOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNorthOutlinedIcon(element, ...properties);
    return element;
}
