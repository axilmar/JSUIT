import { initIcon } from "./icon.js";

//the url of the task alt svg; resolved relative to this module
const URL_TASKALT = new URL('../../assets/icons/taskAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a task alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/taskAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTaskAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'taskAltIcon', url: URL_TASKALT }, ...properties);
}

/**
 * Creates a task alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const taskAltIcon = (...properties) => {
    const element = document.createElement('div');
    initTaskAltIcon(element, ...properties);
    return element;
}
