import { initIcon } from "./icon.js";

//the url of the check circle svg; resolved relative to this module
const URL_CHECKCIRCLE = new URL('../../assets/icons/checkCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkCircleIcon', url: URL_CHECKCIRCLE }, ...properties);
}

/**
 * Creates a check circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckCircleIcon(element, ...properties);
    return element;
}
