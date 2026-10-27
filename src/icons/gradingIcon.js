import { initIcon } from "./icon.js";

//the url of the grading svg; resolved relative to this module
const URL_GRADING = new URL('../../assets/icons/grading.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grading icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grading.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGradingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gradingIcon', url: URL_GRADING }, ...properties);
}

/**
 * Creates a grading icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gradingIcon = (...properties) => {
    const element = document.createElement('div');
    initGradingIcon(element, ...properties);
    return element;
}
