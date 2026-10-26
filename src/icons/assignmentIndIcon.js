import { initIcon } from "./icon.js";

//the url of the assignment ind svg; resolved relative to this module
const URL_ASSIGNMENTIND = new URL('../../assets/icons/assignmentInd.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment ind icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentInd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentIndIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSIGNMENTIND }, ...properties);
}

/**
 * Creates an assignment ind icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentIndIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentIndIcon(element, ...properties);
    return element;
}
