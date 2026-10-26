import { initIcon } from "./icon.js";

//the url of the assignment turned in svg; resolved relative to this module
const URL_ASSIGNMENTTURNEDIN = new URL('../../assets/icons/assignmentTurnedIn.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assignment turned in icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assignmentTurnedIn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssignmentTurnedInIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ASSIGNMENTTURNEDIN }, ...properties);
}

/**
 * Creates an assignment turned in icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assignmentTurnedInIcon = (...properties) => {
    const element = document.createElement('div');
    initAssignmentTurnedInIcon(element, ...properties);
    return element;
}
