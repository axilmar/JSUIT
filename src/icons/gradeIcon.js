import { initIcon } from "./icon.js";

//the url of the grade svg; resolved relative to this module
const URL_GRADE = new URL('../../assets/icons/grade.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grade icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grade.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGradeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gradeIcon', url: URL_GRADE }, ...properties);
}

/**
 * Creates a grade icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gradeIcon = (...properties) => {
    const element = document.createElement('div');
    initGradeIcon(element, ...properties);
    return element;
}
