import { initIcon } from "./icon.js";

//the url of the electric moped outlined svg; resolved relative to this module
const URL_ELECTRICMOPEDOUTLINED = new URL('../../assets/icons/electricMopedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric moped outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricMopedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricMopedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELECTRICMOPEDOUTLINED }, ...properties);
}

/**
 * Creates an electric moped outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricMopedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricMopedOutlinedIcon(element, ...properties);
    return element;
}
