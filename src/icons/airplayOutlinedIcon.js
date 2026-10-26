import { initIcon } from "./icon.js";

//the url of the airplay outlined svg; resolved relative to this module
const URL_AIRPLAYOUTLINED = new URL('../../assets/icons/airplayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an airplay outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airplayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirplayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIRPLAYOUTLINED }, ...properties);
}

/**
 * Creates an airplay outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airplayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirplayOutlinedIcon(element, ...properties);
    return element;
}
