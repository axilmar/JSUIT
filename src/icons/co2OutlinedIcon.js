import { initIcon } from "./icon.js";

//the url of the co2 outlined svg; resolved relative to this module
const URL_CO2OUTLINED = new URL('../../assets/icons/co2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a co2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/co2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCo2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CO2OUTLINED }, ...properties);
}

/**
 * Creates a co2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const co2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCo2OutlinedIcon(element, ...properties);
    return element;
}
