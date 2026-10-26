import { initIcon } from "./icon.js";

//the url of the history edu svg; resolved relative to this module
const URL_HISTORYEDU = new URL('../../assets/icons/historyEdu.svg', import.meta.url).href;

/**
 * Initializes an icon element as a history edu icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/historyEdu.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHistoryEduIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HISTORYEDU }, ...properties);
}

/**
 * Creates a history edu icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const historyEduIcon = (...properties) => {
    const element = document.createElement('div');
    initHistoryEduIcon(element, ...properties);
    return element;
}
