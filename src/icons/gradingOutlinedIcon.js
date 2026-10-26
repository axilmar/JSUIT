import { initIcon } from "./icon.js";

//the url of the grading outlined svg; resolved relative to this module
const URL_GRADINGOUTLINED = new URL('../../assets/icons/gradingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grading outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gradingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGradingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRADINGOUTLINED }, ...properties);
}

/**
 * Creates a grading outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gradingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGradingOutlinedIcon(element, ...properties);
    return element;
}
