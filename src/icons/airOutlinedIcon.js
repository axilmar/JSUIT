import { initIcon } from "./icon.js";

//the url of the air outlined svg; resolved relative to this module
const URL_AIROUTLINED = new URL('../../assets/icons/airOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an air outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/airOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'airOutlinedIcon', url: URL_AIROUTLINED }, ...properties);
}

/**
 * Creates an air outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAirOutlinedIcon(element, ...properties);
    return element;
}
