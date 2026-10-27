import { initIcon } from "./icon.js";

//the url of the local fire department outlined svg; resolved relative to this module
const URL_LOCALFIREDEPARTMENTOUTLINED = new URL('../../assets/icons/localFireDepartmentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local fire department outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localFireDepartmentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalFireDepartmentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localFireDepartmentOutlinedIcon', url: URL_LOCALFIREDEPARTMENTOUTLINED }, ...properties);
}

/**
 * Creates a local fire department outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localFireDepartmentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalFireDepartmentOutlinedIcon(element, ...properties);
    return element;
}
