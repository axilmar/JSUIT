import { initIcon } from "./icon.js";

//the url of the done outline svg; resolved relative to this module
const URL_DONEOUTLINE = new URL('../../assets/icons/doneOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a done outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doneOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoneOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONEOUTLINE }, ...properties);
}

/**
 * Creates a done outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doneOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initDoneOutlineIcon(element, ...properties);
    return element;
}
