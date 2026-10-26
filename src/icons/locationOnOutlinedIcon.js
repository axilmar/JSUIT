import { initIcon } from "./icon.js";

//the url of the location on outlined svg; resolved relative to this module
const URL_LOCATIONONOUTLINED = new URL('../../assets/icons/locationOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONONOUTLINED }, ...properties);
}

/**
 * Creates a location on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationOnOutlinedIcon(element, ...properties);
    return element;
}
