import { initIcon } from "./icon.js";

//the url of the add task svg; resolved relative to this module
const URL_ADDTASK = new URL('../../assets/icons/addTask.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add task icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addTask.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddTaskIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addTaskIcon', url: URL_ADDTASK }, ...properties);
}

/**
 * Creates an add task icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addTaskIcon = (...properties) => {
    const element = document.createElement('div');
    initAddTaskIcon(element, ...properties);
    return element;
}
