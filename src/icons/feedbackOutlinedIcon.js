import { initIcon } from "./icon.js";

//the url of the feedback outlined svg; resolved relative to this module
const URL_FEEDBACKOUTLINED = new URL('../../assets/icons/feedbackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a feedback outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/feedbackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeedbackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FEEDBACKOUTLINED }, ...properties);
}

/**
 * Creates a feedback outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const feedbackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFeedbackOutlinedIcon(element, ...properties);
    return element;
}
