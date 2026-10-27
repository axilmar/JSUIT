import { initIcon } from "./icon.js";

//the url of the timer3 outlined svg; resolved relative to this module
const URL_TIMER3OUTLINED = new URL('../../assets/icons/timer3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timer3OutlinedIcon', url: URL_TIMER3OUTLINED }, ...properties);
}

/**
 * Creates a timer3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimer3OutlinedIcon(element, ...properties);
    return element;
}
