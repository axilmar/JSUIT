import { initIcon } from "./icon.js";

//the url of the running with errors outlined svg; resolved relative to this module
const URL_RUNNINGWITHERRORSOUTLINED = new URL('../../assets/icons/runningWithErrorsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a running with errors outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/runningWithErrorsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRunningWithErrorsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RUNNINGWITHERRORSOUTLINED }, ...properties);
}

/**
 * Creates a running with errors outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const runningWithErrorsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRunningWithErrorsOutlinedIcon(element, ...properties);
    return element;
}
