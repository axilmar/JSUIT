import { initIcon } from "./icon.js";

//the url of the question answer outlined svg; resolved relative to this module
const URL_QUESTIONANSWEROUTLINED = new URL('../../assets/icons/questionAnswerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a question answer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/questionAnswerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuestionAnswerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUESTIONANSWEROUTLINED }, ...properties);
}

/**
 * Creates a question answer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const questionAnswerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQuestionAnswerOutlinedIcon(element, ...properties);
    return element;
}
