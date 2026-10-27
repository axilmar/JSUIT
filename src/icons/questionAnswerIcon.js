import { initIcon } from "./icon.js";

//the url of the question answer svg; resolved relative to this module
const URL_QUESTIONANSWER = new URL('../../assets/icons/questionAnswer.svg', import.meta.url).href;

/**
 * Initializes an icon element as a question answer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/questionAnswer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuestionAnswerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'questionAnswerIcon', url: URL_QUESTIONANSWER }, ...properties);
}

/**
 * Creates a question answer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const questionAnswerIcon = (...properties) => {
    const element = document.createElement('div');
    initQuestionAnswerIcon(element, ...properties);
    return element;
}
