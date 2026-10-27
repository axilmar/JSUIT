import { initIcon } from "./icon.js";

//the url of the local fire department svg; resolved relative to this module
const URL_LOCALFIREDEPARTMENT = new URL('../../assets/icons/localFireDepartment.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local fire department icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localFireDepartment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalFireDepartmentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localFireDepartmentIcon', url: URL_LOCALFIREDEPARTMENT }, ...properties);
}

/**
 * Creates a local fire department icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localFireDepartmentIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalFireDepartmentIcon(element, ...properties);
    return element;
}
