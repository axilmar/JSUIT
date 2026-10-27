import { initIcon } from "./icon.js";

//the url of the timer10 outlined svg; resolved relative to this module
const URL_TIMER10OUTLINED = new URL('../../assets/icons/timer10Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer10 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer10Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer10OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timer10OutlinedIcon', url: URL_TIMER10OUTLINED }, ...properties);
}

/**
 * Creates a timer10 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer10OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimer10OutlinedIcon(element, ...properties);
    return element;
}
