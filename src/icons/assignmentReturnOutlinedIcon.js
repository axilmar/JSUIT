import { initIcon } from "./icon.js";

//the url of the assignment return outlined svg; resolved relative to this module
const URL_ASSIGNMENTRETURNOUTLINED = new URL('../../assets/icons/assignmentReturnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment return outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentReturnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentReturnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assignmentReturnOutlinedIcon', url: URL_ASSIGNMENTRETURNOUTLINED }, ...properties);
}

/**
 * Creates an assignment return outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentReturnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentReturnOutlinedIcon(element, ...properties);
    return element;
}
