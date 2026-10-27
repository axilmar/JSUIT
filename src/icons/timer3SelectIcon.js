import { initIcon } from "./icon.js";

//the url of the timer3 select svg; resolved relative to this module
const URL_TIMER3SELECT = new URL('../../assets/icons/timer3Select.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer3 select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer3Select.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer3SelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timer3SelectIcon', url: URL_TIMER3SELECT }, ...properties);
}

/**
 * Creates a timer3 select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer3SelectIcon = (...properties) => {
    const element = document.createElement('div');
    initTimer3SelectIcon(element, ...properties);
    return element;
}
