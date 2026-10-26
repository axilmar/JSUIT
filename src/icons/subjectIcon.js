import { initIcon } from "./icon.js";

//the url of the subject svg; resolved relative to this module
const URL_SUBJECT = new URL('../../assets/icons/subject.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subject icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subject.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubjectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBJECT }, ...properties);
}

/**
 * Creates a subject icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subjectIcon = (...properties) => {
    const element = document.createElement('div');
    initSubjectIcon(element, ...properties);
    return element;
}
