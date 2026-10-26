import { initIcon } from "./icon.js";

//the url of the location disabled outlined svg; resolved relative to this module
const URL_LOCATIONDISABLEDOUTLINED = new URL('../../assets/icons/locationDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a location disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationDisabledOutlinedIcon(element, ...properties);
    return element;
}
