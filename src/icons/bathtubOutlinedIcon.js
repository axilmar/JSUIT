import { initIcon } from "./icon.js";

//the url of the bathtub outlined svg; resolved relative to this module
const URL_BATHTUBOUTLINED = new URL('../../assets/icons/bathtubOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bathtub outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bathtubOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBathtubOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BATHTUBOUTLINED }, ...properties);
}

/**
 * Creates a bathtub outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bathtubOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBathtubOutlinedIcon(element, ...properties);
    return element;
}
