import { initIcon } from "./icon.js";

//the url of the assignment returned outlined svg; resolved relative to this module
const URL_ASSIGNMENTRETURNEDOUTLINED = new URL('../../assets/icons/assignmentReturnedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment returned outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentReturnedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentReturnedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSIGNMENTRETURNEDOUTLINED }, ...properties);
}

/**
 * Creates an assignment returned outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentReturnedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentReturnedOutlinedIcon(element, ...properties);
    return element;
}
