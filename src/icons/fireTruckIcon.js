import { initIcon } from "./icon.js";

//the url of the fire truck svg; resolved relative to this module
const URL_FIRETRUCK = new URL('../../assets/icons/fireTruck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fire truck icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fireTruck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFireTruckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIRETRUCK }, ...properties);
}

/**
 * Creates a fire truck icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fireTruckIcon = (...properties) => {
    const element = document.createElement('div');
    initFireTruckIcon(element, ...properties);
    return element;
}
