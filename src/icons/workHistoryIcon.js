import { initIcon } from "./icon.js";

//the url of the work history svg; resolved relative to this module
const URL_WORKHISTORY = new URL('../../assets/icons/workHistory.svg', import.meta.url).href;

/**
 * Initializes an icon element as a work history icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/workHistory.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWorkHistoryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'workHistoryIcon', url: URL_WORKHISTORY }, ...properties);
}

/**
 * Creates a work history icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const workHistoryIcon = (...properties) => {
    const element = document.createElement('div');
    initWorkHistoryIcon(element, ...properties);
    return element;
}
