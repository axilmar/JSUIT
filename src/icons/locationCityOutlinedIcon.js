import { initIcon } from "./icon.js";

//the url of the location city outlined svg; resolved relative to this module
const URL_LOCATIONCITYOUTLINED = new URL('../../assets/icons/locationCityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location city outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationCityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationCityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONCITYOUTLINED }, ...properties);
}

/**
 * Creates a location city outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationCityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationCityOutlinedIcon(element, ...properties);
    return element;
}
