import { initIcon } from "./icon.js";

//the url of the timer outlined svg; resolved relative to this module
const URL_TIMEROUTLINED = new URL('../../assets/icons/timerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIMEROUTLINED }, ...properties);
}

/**
 * Creates a timer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimerOutlinedIcon(element, ...properties);
    return element;
}
