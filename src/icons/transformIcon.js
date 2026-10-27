import { initIcon } from "./icon.js";

//the url of the transform svg; resolved relative to this module
const URL_TRANSFORM = new URL('../../assets/icons/transform.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transform icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transform.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransformIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transformIcon', url: URL_TRANSFORM }, ...properties);
}

/**
 * Creates a transform icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transformIcon = (...properties) => {
    const element = document.createElement('div');
    initTransformIcon(element, ...properties);
    return element;
}
