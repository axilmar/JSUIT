import { initIcon } from "./icon.js";

//the url of the speed svg; resolved relative to this module
const URL_SPEED = new URL('../../assets/icons/speed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPEED }, ...properties);
}

/**
 * Creates a speed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeedIcon(element, ...properties);
    return element;
}
