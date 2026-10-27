import { initIcon } from "./icon.js";

//the url of the assessment svg; resolved relative to this module
const URL_ASSESSMENT = new URL('../../assets/icons/assessment.svg', import.meta.url).href;

/**
 * Initializes an icon element as an assessment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/assessment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAssessmentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'assessmentIcon', url: URL_ASSESSMENT }, ...properties);
}

/**
 * Creates an assessment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const assessmentIcon = (...properties) => {
    const element = document.createElement('div');
    initAssessmentIcon(element, ...properties);
    return element;
}
