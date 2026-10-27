import { initIcon } from "./icon.js";

//the url of the timer off svg; resolved relative to this module
const URL_TIMEROFF = new URL('../../assets/icons/timerOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timerOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimerOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'timerOffIcon', url: URL_TIMEROFF }, ...properties);
}

/**
 * Creates a timer off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timerOffIcon = (...properties) => {
    const element = document.createElement('div');
    initTimerOffIcon(element, ...properties);
    return element;
}
