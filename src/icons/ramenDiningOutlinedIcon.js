import { initIcon } from "./icon.js";

//the url of the ramen dining outlined svg; resolved relative to this module
const URL_RAMENDININGOUTLINED = new URL('../../assets/icons/ramenDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ramen dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ramenDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRamenDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAMENDININGOUTLINED }, ...properties);
}

/**
 * Creates a ramen dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ramenDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRamenDiningOutlinedIcon(element, ...properties);
    return element;
}
