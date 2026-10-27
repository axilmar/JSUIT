import { initIcon } from "./icon.js";

//the url of the assignment outlined svg; resolved relative to this module
const URL_ASSIGNMENTOUTLINED = new URL('../../assets/icons/assignmentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assignmentOutlinedIcon', url: URL_ASSIGNMENTOUTLINED }, ...properties);
}

/**
 * Creates an assignment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentOutlinedIcon(element, ...properties);
    return element;
}
