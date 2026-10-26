import { initIcon } from "./icon.js";

//the url of the location off svg; resolved relative to this module
const URL_LOCATIONOFF = new URL('../../assets/icons/locationOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONOFF }, ...properties);
}

/**
 * Creates a location off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationOffIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationOffIcon(element, ...properties);
    return element;
}
