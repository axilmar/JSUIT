import { initIcon } from "./icon.js";

//the url of the question mark svg; resolved relative to this module
const URL_QUESTIONMARK = new URL('../../assets/icons/questionMark.svg', import.meta.url).href;

/**
 * Initializes an icon element as a question mark icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/questionMark.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuestionMarkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUESTIONMARK }, ...properties);
}

/**
 * Creates a question mark icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const questionMarkIcon = (...properties) => {
    const element = document.createElement('div');
    initQuestionMarkIcon(element, ...properties);
    return element;
}
