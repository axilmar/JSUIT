import { initIcon } from "./icon.js";

//the url of the rectangle svg; resolved relative to this module
const URL_RECTANGLE = new URL('../../assets/icons/rectangle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rectangle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rectangle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRectangleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RECTANGLE }, ...properties);
}

/**
 * Creates a rectangle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rectangleIcon = (...properties) => {
    const element = document.createElement('div');
    initRectangleIcon(element, ...properties);
    return element;
}
