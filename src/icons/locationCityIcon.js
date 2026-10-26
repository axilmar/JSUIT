import { initIcon } from "./icon.js";

//the url of the location city svg; resolved relative to this module
const URL_LOCATIONCITY = new URL('../../assets/icons/locationCity.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location city icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationCity.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationCityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONCITY }, ...properties);
}

/**
 * Creates a location city icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationCityIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationCityIcon(element, ...properties);
    return element;
}
