import { initIcon } from "./icon.js";

//the url of the face5 svg; resolved relative to this module
const URL_FACE5 = new URL('../../assets/icons/face5.svg', import.meta.url).href;

/**
 * Initializes an icon element as a face5 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/face5.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFace5Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'face5Icon', url: URL_FACE5 }, ...properties);
}

/**
 * Creates a face5 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const face5Icon = (...properties) => {
    const element = document.createElement('div');
    initFace5Icon(element, ...properties);
    return element;
}
