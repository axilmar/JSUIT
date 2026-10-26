import { initIcon } from "./icon.js";

//the url of the mark email read svg; resolved relative to this module
const URL_MARKEMAILREAD = new URL('../../assets/icons/markEmailRead.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark email read icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markEmailRead.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkEmailReadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKEMAILREAD }, ...properties);
}

/**
 * Creates a mark email read icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markEmailReadIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkEmailReadIcon(element, ...properties);
    return element;
}
