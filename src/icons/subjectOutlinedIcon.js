import { initIcon } from "./icon.js";

//the url of the subject outlined svg; resolved relative to this module
const URL_SUBJECTOUTLINED = new URL('../../assets/icons/subjectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subject outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subjectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubjectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBJECTOUTLINED }, ...properties);
}

/**
 * Creates a subject outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subjectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSubjectOutlinedIcon(element, ...properties);
    return element;
}
