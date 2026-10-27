import { initIcon } from "./icon.js";

//the url of the plagiarism svg; resolved relative to this module
const URL_PLAGIARISM = new URL('../../assets/icons/plagiarism.svg', import.meta.url).href;

/**
 * Initializes an icon element as a plagiarism icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/plagiarism.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlagiarismIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'plagiarismIcon', url: URL_PLAGIARISM }, ...properties);
}

/**
 * Creates a plagiarism icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const plagiarismIcon = (...properties) => {
    const element = document.createElement('div');
    initPlagiarismIcon(element, ...properties);
    return element;
}
