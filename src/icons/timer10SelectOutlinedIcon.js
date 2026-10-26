import { initIcon } from "./icon.js";

//the url of the timer10 select outlined svg; resolved relative to this module
const URL_TIMER10SELECTOUTLINED = new URL('../../assets/icons/timer10SelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timer10 select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timer10SelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimer10SelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIMER10SELECTOUTLINED }, ...properties);
}

/**
 * Creates a timer10 select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timer10SelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTimer10SelectOutlinedIcon(element, ...properties);
    return element;
}
