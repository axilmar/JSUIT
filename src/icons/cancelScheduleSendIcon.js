import { initIcon } from "./icon.js";

//the url of the cancel schedule send svg; resolved relative to this module
const URL_CANCELSCHEDULESEND = new URL('../../assets/icons/cancelScheduleSend.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cancel schedule send icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cancelScheduleSend.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCancelScheduleSendIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CANCELSCHEDULESEND }, ...properties);
}

/**
 * Creates a cancel schedule send icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cancelScheduleSendIcon = (...properties) => {
    const element = document.createElement('div');
    initCancelScheduleSendIcon(element, ...properties);
    return element;
}
