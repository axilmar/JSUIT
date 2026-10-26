import { initIcon } from "./icon.js";

//the url of the blinds outlined svg; resolved relative to this module
const URL_BLINDSOUTLINED = new URL('../../assets/icons/blindsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blinds outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blindsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlindsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLINDSOUTLINED }, ...properties);
}

/**
 * Creates a blinds outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blindsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlindsOutlinedIcon(element, ...properties);
    return element;
}
