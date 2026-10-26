import { initIcon } from "./icon.js";

//the url of the airplanemode active outlined svg; resolved relative to this module
const URL_AIRPLANEMODEACTIVEOUTLINED = new URL('../../assets/icons/airplanemodeActiveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplanemode active outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplanemodeActiveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplanemodeActiveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRPLANEMODEACTIVEOUTLINED }, ...properties);
}

/**
 * Creates an airplanemode active outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplanemodeActiveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplanemodeActiveOutlinedIcon(element, ...properties);
    return element;
}
