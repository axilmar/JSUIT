import { initIcon } from "./icon.js";

//the url of the home work svg; resolved relative to this module
const URL_HOMEWORK = new URL('../../assets/icons/homeWork.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home work icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeWork.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeWorkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'homeWorkIcon', url: URL_HOMEWORK }, ...properties);
}

/**
 * Creates a home work icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeWorkIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeWorkIcon(element, ...properties);
    return element;
}
