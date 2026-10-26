import { initIcon } from "./icon.js";

//the url of the location searching svg; resolved relative to this module
const URL_LOCATIONSEARCHING = new URL('../../assets/icons/locationSearching.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location searching icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationSearching.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationSearchingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONSEARCHING }, ...properties);
}

/**
 * Creates a location searching icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationSearchingIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationSearchingIcon(element, ...properties);
    return element;
}
