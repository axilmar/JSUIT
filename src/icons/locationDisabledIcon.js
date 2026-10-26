import { initIcon } from "./icon.js";

//the url of the location disabled svg; resolved relative to this module
const URL_LOCATIONDISABLED = new URL('../../assets/icons/locationDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONDISABLED }, ...properties);
}

/**
 * Creates a location disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationDisabledIcon(element, ...properties);
    return element;
}
