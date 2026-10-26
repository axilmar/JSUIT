import { initIcon } from "./icon.js";

//the url of the location off outlined svg; resolved relative to this module
const URL_LOCATIONOFFOUTLINED = new URL('../../assets/icons/locationOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONOFFOUTLINED }, ...properties);
}

/**
 * Creates a location off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationOffOutlinedIcon(element, ...properties);
    return element;
}
