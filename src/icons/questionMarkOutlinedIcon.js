import { initIcon } from "./icon.js";

//the url of the question mark outlined svg; resolved relative to this module
const URL_QUESTIONMARKOUTLINED = new URL('../../assets/icons/questionMarkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a question mark outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/questionMarkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuestionMarkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUESTIONMARKOUTLINED }, ...properties);
}

/**
 * Creates a question mark outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const questionMarkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initQuestionMarkOutlinedIcon(element, ...properties);
    return element;
}
