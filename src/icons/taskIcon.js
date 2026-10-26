import { initIcon } from "./icon.js";

//the url of the task svg; resolved relative to this module
const URL_TASK = new URL('../../assets/icons/task.svg', import.meta.url).href;

/**
 * Initializes an icon element as a task icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/task.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTaskIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TASK }, ...properties);
}

/**
 * Creates a task icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const taskIcon = (...properties) => {
    const element = document.createElement('div');
    initTaskIcon(element, ...properties);
    return element;
}
