import { initIcon } from "./icon.js";

//the url of the grade outlined svg; resolved relative to this module
const URL_GRADEOUTLINED = new URL('../../assets/icons/gradeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grade outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gradeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGradeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRADEOUTLINED }, ...properties);
}

/**
 * Creates a grade outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gradeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGradeOutlinedIcon(element, ...properties);
    return element;
}
