import { initIcon } from "./icon.js";

//the url of the assignment return svg; resolved relative to this module
const URL_ASSIGNMENTRETURN = new URL('../../assets/icons/assignmentReturn.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment return icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentReturn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentReturnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assignmentReturnIcon', url: URL_ASSIGNMENTRETURN }, ...properties);
}

/**
 * Creates an assignment return icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentReturnIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentReturnIcon(element, ...properties);
    return element;
}
