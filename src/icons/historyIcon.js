import { initIcon } from "./icon.js";

//the url of the history svg; resolved relative to this module
const URL_HISTORY = new URL('../../assets/icons/history.svg', import.meta.url).href;

/**
 * Initializes an icon element as a history icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/history.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHistoryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'historyIcon', url: URL_HISTORY }, ...properties);
}

/**
 * Creates a history icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const historyIcon = (...properties) => {
    const element = document.createElement('div');
    initHistoryIcon(element, ...properties);
    return element;
}
