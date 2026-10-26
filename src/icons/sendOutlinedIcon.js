import { initIcon } from "./icon.js";

//the url of the send outlined svg; resolved relative to this module
const URL_SENDOUTLINED = new URL('../../assets/icons/sendOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a send outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sendOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSendOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SENDOUTLINED }, ...properties);
}

/**
 * Creates a send outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sendOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSendOutlinedIcon(element, ...properties);
    return element;
}
