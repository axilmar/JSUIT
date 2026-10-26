import { initIcon } from "./icon.js";

//the url of the running with errors svg; resolved relative to this module
const URL_RUNNINGWITHERRORS = new URL('../../assets/icons/runningWithErrors.svg', import.meta.url).href;

/**
 * Initializes an icon element as a running with errors icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/runningWithErrors.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRunningWithErrorsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RUNNINGWITHERRORS }, ...properties);
}

/**
 * Creates a running with errors icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const runningWithErrorsIcon = (...properties) => {
    const element = document.createElement('div');
    initRunningWithErrorsIcon(element, ...properties);
    return element;
}
