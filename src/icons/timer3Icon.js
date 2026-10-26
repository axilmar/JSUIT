import { initIcon } from "./icon.js";

//the url of the timer3 svg; resolved relative to this module
const URL_TIMER3 = new URL('../../assets/icons/timer3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIMER3 }, ...properties);
}

/**
 * Creates a timer3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer3Icon = (...properties) => {
    const element = document.createElement('div');
    initTimer3Icon(element, ...properties);
    return element;
}
