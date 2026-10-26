import { initIcon } from "./icon.js";

//the url of the quiz outlined svg; resolved relative to this module
const URL_QUIZOUTLINED = new URL('../../assets/icons/quizOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a quiz outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/quizOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuizOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUIZOUTLINED }, ...properties);
}

/**
 * Creates a quiz outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const quizOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQuizOutlinedIcon(element, ...properties);
    return element;
}
