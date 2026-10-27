import { initIcon } from "./icon.js";

//the url of the timer10 select svg; resolved relative to this module
const URL_TIMER10SELECT = new URL('../../assets/icons/timer10Select.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer10 select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer10Select.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer10SelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timer10SelectIcon', url: URL_TIMER10SELECT }, ...properties);
}

/**
 * Creates a timer10 select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer10SelectIcon = (...properties) => {
    const element = document.createElement('div');
    initTimer10SelectIcon(element, ...properties);
    return element;
}
