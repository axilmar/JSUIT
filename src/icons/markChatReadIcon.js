import { initIcon } from "./icon.js";

//the url of the mark chat read svg; resolved relative to this module
const URL_MARKCHATREAD = new URL('../../assets/icons/markChatRead.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark chat read icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markChatRead.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkChatReadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'markChatReadIcon', url: URL_MARKCHATREAD }, ...properties);
}

/**
 * Creates a mark chat read icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markChatReadIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkChatReadIcon(element, ...properties);
    return element;
}
