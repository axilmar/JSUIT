import { initIcon } from "./icon.js";

//the url of the history outlined svg; resolved relative to this module
const URL_HISTORYOUTLINED = new URL('../../assets/icons/historyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a history outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/historyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHistoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HISTORYOUTLINED }, ...properties);
}

/**
 * Creates a history outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const historyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHistoryOutlinedIcon(element, ...properties);
    return element;
}
