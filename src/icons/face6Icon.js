import { initIcon } from "./icon.js";

//the url of the face6 svg; resolved relative to this module
const URL_FACE6 = new URL('../../assets/icons/face6.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face6 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face6.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace6Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'face6Icon', url: URL_FACE6 }, ...properties);
}

/**
 * Creates a face6 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face6Icon = (...properties) => {
    const element = document.createElement('div');
    initFace6Icon(element, ...properties);
    return element;
}
