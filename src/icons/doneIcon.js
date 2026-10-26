import { initIcon } from "./icon.js";

//the url of the done svg; resolved relative to this module
const URL_DONE = new URL('../../assets/icons/done.svg', import.meta.url).href;

/**
 * Initializes an icon element as a done icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/done.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONE }, ...properties);
}

/**
 * Creates a done icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doneIcon = (...properties) => {
    const element = document.createElement('div');
    initDoneIcon(element, ...properties);
    return element;
}
