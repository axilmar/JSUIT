import { initIcon } from "./icon.js";

//the url of the laptop outlined svg; resolved relative to this module
const URL_LAPTOPOUTLINED = new URL('../../assets/icons/laptopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a laptop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/laptopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaptopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'laptopOutlinedIcon', url: URL_LAPTOPOUTLINED }, ...properties);
}

/**
 * Creates a laptop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const laptopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLaptopOutlinedIcon(element, ...properties);
    return element;
}
