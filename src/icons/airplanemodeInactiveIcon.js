import { initIcon } from "./icon.js";

//the url of the airplanemode inactive svg; resolved relative to this module
const URL_AIRPLANEMODEINACTIVE = new URL('../../assets/icons/airplanemodeInactive.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplanemode inactive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplanemodeInactive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplanemodeInactiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRPLANEMODEINACTIVE }, ...properties);
}

/**
 * Creates an airplanemode inactive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplanemodeInactiveIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplanemodeInactiveIcon(element, ...properties);
    return element;
}
