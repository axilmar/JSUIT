import { initIcon } from "./icon.js";

//the url of the assignment late outlined svg; resolved relative to this module
const URL_ASSIGNMENTLATEOUTLINED = new URL('../../assets/icons/assignmentLateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment late outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentLateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentLateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assignmentLateOutlinedIcon', url: URL_ASSIGNMENTLATEOUTLINED }, ...properties);
}

/**
 * Creates an assignment late outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentLateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentLateOutlinedIcon(element, ...properties);
    return element;
}
