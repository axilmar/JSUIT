import { initIcon } from "./icon.js";

//the url of the change history svg; resolved relative to this module
const URL_CHANGEHISTORY = new URL('../../assets/icons/changeHistory.svg', import.meta.url).href;

/**
 * Initializes an icon element as a change history icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/changeHistory.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChangeHistoryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHANGEHISTORY }, ...properties);
}

/**
 * Creates a change history icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const changeHistoryIcon = (...properties) => {
    const element = document.createElement('div');
    initChangeHistoryIcon(element, ...properties);
    return element;
}
