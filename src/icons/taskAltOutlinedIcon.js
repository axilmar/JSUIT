import { initIcon } from "./icon.js";

//the url of the task alt outlined svg; resolved relative to this module
const URL_TASKALTOUTLINED = new URL('../../assets/icons/taskAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a task alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/taskAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTaskAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'taskAltOutlinedIcon', url: URL_TASKALTOUTLINED }, ...properties);
}

/**
 * Creates a task alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const taskAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTaskAltOutlinedIcon(element, ...properties);
    return element;
}
