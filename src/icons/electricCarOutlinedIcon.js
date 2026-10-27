import { initIcon } from "./icon.js";

//the url of the electric car outlined svg; resolved relative to this module
const URL_ELECTRICCAROUTLINED = new URL('../../assets/icons/electricCarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric car outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricCarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricCarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricCarOutlinedIcon', url: URL_ELECTRICCAROUTLINED }, ...properties);
}

/**
 * Creates an electric car outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricCarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricCarOutlinedIcon(element, ...properties);
    return element;
}
