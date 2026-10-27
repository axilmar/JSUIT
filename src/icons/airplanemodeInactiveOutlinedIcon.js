import { initIcon } from "./icon.js";

//the url of the airplanemode inactive outlined svg; resolved relative to this module
const URL_AIRPLANEMODEINACTIVEOUTLINED = new URL('../../assets/icons/airplanemodeInactiveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplanemode inactive outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplanemodeInactiveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplanemodeInactiveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airplanemodeInactiveOutlinedIcon', url: URL_AIRPLANEMODEINACTIVEOUTLINED }, ...properties);
}

/**
 * Creates an airplanemode inactive outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplanemodeInactiveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplanemodeInactiveOutlinedIcon(element, ...properties);
    return element;
}
