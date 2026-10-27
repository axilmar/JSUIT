import { initIcon } from "./icon.js";

//the url of the history toggle off svg; resolved relative to this module
const URL_HISTORYTOGGLEOFF = new URL('../../assets/icons/historyToggleOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a history toggle off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/historyToggleOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHistoryToggleOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'historyToggleOffIcon', url: URL_HISTORYTOGGLEOFF }, ...properties);
}

/**
 * Creates a history toggle off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const historyToggleOffIcon = (...properties) => {
    const element = document.createElement('div');
    initHistoryToggleOffIcon(element, ...properties);
    return element;
}
