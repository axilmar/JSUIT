import { initIcon } from "./icon.js";

//the url of the assignment svg; resolved relative to this module
const URL_ASSIGNMENT = new URL('../../assets/icons/assignment.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSIGNMENT }, ...properties);
}

/**
 * Creates an assignment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentIcon(element, ...properties);
    return element;
}
