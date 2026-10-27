import { initIcon } from "./icon.js";

//the url of the transform outlined svg; resolved relative to this module
const URL_TRANSFORMOUTLINED = new URL('../../assets/icons/transformOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transform outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transformOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransformOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transformOutlinedIcon', url: URL_TRANSFORMOUTLINED }, ...properties);
}

/**
 * Creates a transform outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transformOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTransformOutlinedIcon(element, ...properties);
    return element;
}
