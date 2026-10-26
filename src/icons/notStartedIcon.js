import { initIcon } from "./icon.js";

//the url of the not started svg; resolved relative to this module
const URL_NOTSTARTED = new URL('../../assets/icons/notStarted.svg', import.meta.url).href;

/**
 * Initializes an icon element as a not started icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notStarted.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotStartedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTSTARTED }, ...properties);
}

/**
 * Creates a not started icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notStartedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotStartedIcon(element, ...properties);
    return element;
}
