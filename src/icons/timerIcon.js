import { initIcon } from "./icon.js";

//the url of the timer svg; resolved relative to this module
const URL_TIMER = new URL('../../assets/icons/timer.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timerIcon', url: URL_TIMER }, ...properties);
}

/**
 * Creates a timer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timerIcon = (...properties) => {
    const element = document.createElement('div');
    initTimerIcon(element, ...properties);
    return element;
}
