import { initIcon } from "./icon.js";

//the url of the male svg; resolved relative to this module
const URL_MALE = new URL('../../assets/icons/male.svg', import.meta.url).href;

/**
 * Initializes an icon element as a male icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/male.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMaleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'maleIcon', url: URL_MALE }, ...properties);
}

/**
 * Creates a male icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const maleIcon = (...properties) => {
    const element = document.createElement('div');
    initMaleIcon(element, ...properties);
    return element;
}
