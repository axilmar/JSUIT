import { initIcon } from "./icon.js";

//the url of the quiz svg; resolved relative to this module
const URL_QUIZ = new URL('../../assets/icons/quiz.svg', import.meta.url).href;

/**
 * Initializes an icon element as a quiz icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/quiz.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuizIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUIZ }, ...properties);
}

/**
 * Creates a quiz icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const quizIcon = (...properties) => {
    const element = document.createElement('div');
    initQuizIcon(element, ...properties);
    return element;
}
