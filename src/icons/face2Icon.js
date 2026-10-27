import { initIcon } from "./icon.js";

//the url of the face2 svg; resolved relative to this module
const URL_FACE2 = new URL('../../assets/icons/face2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'face2Icon', url: URL_FACE2 }, ...properties);
}

/**
 * Creates a face2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face2Icon = (...properties) => {
    const element = document.createElement('div');
    initFace2Icon(element, ...properties);
    return element;
}
