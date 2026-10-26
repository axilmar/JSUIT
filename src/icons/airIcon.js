import { initIcon } from "./icon.js";

//the url of the air svg; resolved relative to this module
const URL_AIR = new URL('../../assets/icons/air.svg', import.meta.url).href;

/**
 * Initializes an icon element as an air icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/air.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAirIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AIR }, ...properties);
}

/**
 * Creates an air icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const airIcon = (...properties) => {
    const element = document.createElement('div');
    initAirIcon(element, ...properties);
    return element;
}
