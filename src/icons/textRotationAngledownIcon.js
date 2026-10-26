import { initIcon } from "./icon.js";

//the url of the text rotation angledown svg; resolved relative to this module
const URL_TEXTROTATIONANGLEDOWN = new URL('../../assets/icons/textRotationAngledown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotation angledown icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotationAngledown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotationAngledownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTROTATIONANGLEDOWN }, ...properties);
}

/**
 * Creates a text rotation angledown icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotationAngledownIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotationAngledownIcon(element, ...properties);
    return element;
}
