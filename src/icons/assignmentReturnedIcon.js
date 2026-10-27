import { initIcon } from "./icon.js";

//the url of the assignment returned svg; resolved relative to this module
const URL_ASSIGNMENTRETURNED = new URL('../../assets/icons/assignmentReturned.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment returned icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentReturned.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentReturnedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assignmentReturnedIcon', url: URL_ASSIGNMENTRETURNED }, ...properties);
}

/**
 * Creates an assignment returned icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentReturnedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentReturnedIcon(element, ...properties);
    return element;
}
