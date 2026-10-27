import { initIcon } from "./icon.js";

//the url of the auto fix high svg; resolved relative to this module
const URL_AUTOFIXHIGH = new URL('../../assets/icons/autoFixHigh.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto fix high icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoFixHigh.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoFixHighIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoFixHighIcon', url: URL_AUTOFIXHIGH }, ...properties);
}

/**
 * Creates an auto fix high icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoFixHighIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoFixHighIcon(element, ...properties);
    return element;
}
