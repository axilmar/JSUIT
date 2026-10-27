import { initIcon } from "./icon.js";

//the url of the assignment ind outlined svg; resolved relative to this module
const URL_ASSIGNMENTINDOUTLINED = new URL('../../assets/icons/assignmentIndOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment ind outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentIndOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentIndOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assignmentIndOutlinedIcon', url: URL_ASSIGNMENTINDOUTLINED }, ...properties);
}

/**
 * Creates an assignment ind outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentIndOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentIndOutlinedIcon(element, ...properties);
    return element;
}
