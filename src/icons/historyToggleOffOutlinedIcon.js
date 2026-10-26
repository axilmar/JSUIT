import { initIcon } from "./icon.js";

//the url of the history toggle off outlined svg; resolved relative to this module
const URL_HISTORYTOGGLEOFFOUTLINED = new URL('../../assets/icons/historyToggleOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a history toggle off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/historyToggleOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHistoryToggleOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HISTORYTOGGLEOFFOUTLINED }, ...properties);
}

/**
 * Creates a history toggle off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const historyToggleOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHistoryToggleOffOutlinedIcon(element, ...properties);
    return element;
}
