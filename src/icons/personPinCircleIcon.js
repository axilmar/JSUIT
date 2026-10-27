import { initIcon } from "./icon.js";

//the url of the person pin circle svg; resolved relative to this module
const URL_PERSONPINCIRCLE = new URL('../../assets/icons/personPinCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person pin circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personPinCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonPinCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personPinCircleIcon', url: URL_PERSONPINCIRCLE }, ...properties);
}

/**
 * Creates a person pin circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personPinCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonPinCircleIcon(element, ...properties);
    return element;
}
