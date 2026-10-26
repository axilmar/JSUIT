import { initIcon } from "./icon.js";

//the url of the laptop mac outlined svg; resolved relative to this module
const URL_LAPTOPMACOUTLINED = new URL('../../assets/icons/laptopMacOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a laptop mac outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/laptopMacOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaptopMacOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAPTOPMACOUTLINED }, ...properties);
}

/**
 * Creates a laptop mac outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const laptopMacOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLaptopMacOutlinedIcon(element, ...properties);
    return element;
}
