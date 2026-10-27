import { initIcon } from "./icon.js";

//the url of the plagiarism outlined svg; resolved relative to this module
const URL_PLAGIARISMOUTLINED = new URL('../../assets/icons/plagiarismOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a plagiarism outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/plagiarismOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlagiarismOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'plagiarismOutlinedIcon', url: URL_PLAGIARISMOUTLINED }, ...properties);
}

/**
 * Creates a plagiarism outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const plagiarismOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlagiarismOutlinedIcon(element, ...properties);
    return element;
}
