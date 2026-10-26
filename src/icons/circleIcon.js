import { initIcon } from "./icon.js";

//the url of the circle svg; resolved relative to this module
const URL_CIRCLE = new URL('../../assets/icons/circle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/circle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CIRCLE }, ...properties);
}

/**
 * Creates a circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const circleIcon = (...properties) => {
    const element = document.createElement('div');
    initCircleIcon(element, ...properties);
    return element;
}
