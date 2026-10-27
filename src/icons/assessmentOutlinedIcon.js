import { initIcon } from "./icon.js";

//the url of the assessment outlined svg; resolved relative to this module
const URL_ASSESSMENTOUTLINED = new URL('../../assets/icons/assessmentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assessment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assessmentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssessmentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assessmentOutlinedIcon', url: URL_ASSESSMENTOUTLINED }, ...properties);
}

/**
 * Creates an assessment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assessmentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAssessmentOutlinedIcon(element, ...properties);
    return element;
}
