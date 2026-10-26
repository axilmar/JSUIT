import { initIcon } from "./icon.js";

//the url of the assignment late svg; resolved relative to this module
const URL_ASSIGNMENTLATE = new URL('../../assets/icons/assignmentLate.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment late icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentLate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentLateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSIGNMENTLATE }, ...properties);
}

/**
 * Creates an assignment late icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentLateIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentLateIcon(element, ...properties);
    return element;
}
