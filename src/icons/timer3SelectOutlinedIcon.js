import { initIcon } from "./icon.js";

//the url of the timer3 select outlined svg; resolved relative to this module
const URL_TIMER3SELECTOUTLINED = new URL('../../assets/icons/timer3SelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer3 select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer3SelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer3SelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIMER3SELECTOUTLINED }, ...properties);
}

/**
 * Creates a timer3 select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer3SelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimer3SelectOutlinedIcon(element, ...properties);
    return element;
}
