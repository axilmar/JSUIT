import { initIcon } from "./icon.js";

//the url of the priority high svg; resolved relative to this module
const URL_PRIORITYHIGH = new URL('../../assets/icons/priorityHigh.svg', import.meta.url).href;

/**
 * Initializes an icon element as a priority high icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/priorityHigh.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPriorityHighIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRIORITYHIGH }, ...properties);
}

/**
 * Creates a priority high icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const priorityHighIcon = (...properties) => {
    const element = document.createElement('div');
    initPriorityHighIcon(element, ...properties);
    return element;
}
