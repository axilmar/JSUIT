import { initIcon } from "./icon.js";

//the url of the done all svg; resolved relative to this module
const URL_DONEALL = new URL('../../assets/icons/doneAll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a done all icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doneAll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoneAllIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doneAllIcon', url: URL_DONEALL }, ...properties);
}

/**
 * Creates a done all icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doneAllIcon = (...properties) => {
    const element = document.createElement('div');
    initDoneAllIcon(element, ...properties);
    return element;
}
