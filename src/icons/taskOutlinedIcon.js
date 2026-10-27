import { initIcon } from "./icon.js";

//the url of the task outlined svg; resolved relative to this module
const URL_TASKOUTLINED = new URL('../../assets/icons/taskOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a task outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/taskOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTaskOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'taskOutlinedIcon', url: URL_TASKOUTLINED }, ...properties);
}

/**
 * Creates a task outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const taskOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTaskOutlinedIcon(element, ...properties);
    return element;
}
