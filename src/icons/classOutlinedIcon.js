import { initIcon } from "./icon.js";

//the url of the class outlined svg; resolved relative to this module
const URL_CLASSOUTLINED = new URL('../../assets/icons/classOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a class outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/classOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClassOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLASSOUTLINED }, ...properties);
}

/**
 * Creates a class outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const classOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initClassOutlinedIcon(element, ...properties);
    return element;
}
