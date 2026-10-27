import { initIcon } from "./icon.js";

//the url of the countertops outlined svg; resolved relative to this module
const URL_COUNTERTOPSOUTLINED = new URL('../../assets/icons/countertopsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a countertops outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/countertopsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCountertopsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'countertopsOutlinedIcon', url: URL_COUNTERTOPSOUTLINED }, ...properties);
}

/**
 * Creates a countertops outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const countertopsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCountertopsOutlinedIcon(element, ...properties);
    return element;
}
