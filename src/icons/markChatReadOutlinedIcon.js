import { initIcon } from "./icon.js";

//the url of the mark chat read outlined svg; resolved relative to this module
const URL_MARKCHATREADOUTLINED = new URL('../../assets/icons/markChatReadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark chat read outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markChatReadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkChatReadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKCHATREADOUTLINED }, ...properties);
}

/**
 * Creates a mark chat read outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markChatReadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkChatReadOutlinedIcon(element, ...properties);
    return element;
}
