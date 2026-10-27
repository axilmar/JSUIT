import { initIcon } from "./icon.js";

//the url of the cancel presentation svg; resolved relative to this module
const URL_CANCELPRESENTATION = new URL('../../assets/icons/cancelPresentation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cancel presentation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cancelPresentation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCancelPresentationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cancelPresentationIcon', url: URL_CANCELPRESENTATION }, ...properties);
}

/**
 * Creates a cancel presentation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cancelPresentationIcon = (...properties) => {
    const element = document.createElement('div');
    initCancelPresentationIcon(element, ...properties);
    return element;
}
