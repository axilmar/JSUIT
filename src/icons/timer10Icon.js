import { initIcon } from "./icon.js";

//the url of the timer10 svg; resolved relative to this module
const URL_TIMER10 = new URL('../../assets/icons/timer10.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer10 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer10.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer10Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timer10Icon', url: URL_TIMER10 }, ...properties);
}

/**
 * Creates a timer10 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer10Icon = (...properties) => {
    const element = document.createElement('div');
    initTimer10Icon(element, ...properties);
    return element;
}
