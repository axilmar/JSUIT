import { initIcon } from "./icon.js";

//the url of the airplanemode active svg; resolved relative to this module
const URL_AIRPLANEMODEACTIVE = new URL('../../assets/icons/airplanemodeActive.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplanemode active icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplanemodeActive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplanemodeActiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRPLANEMODEACTIVE }, ...properties);
}

/**
 * Creates an airplanemode active icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplanemodeActiveIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplanemodeActiveIcon(element, ...properties);
    return element;
}
