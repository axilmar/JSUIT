import { initIcon } from "./icon.js";

//the url of the forward to inbox outlined svg; resolved relative to this module
const URL_FORWARDTOINBOXOUTLINED = new URL('../../assets/icons/forwardToInboxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward to inbox outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forwardToInboxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForwardToInboxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORWARDTOINBOXOUTLINED }, ...properties);
}

/**
 * Creates a forward to inbox outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forwardToInboxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForwardToInboxOutlinedIcon(element, ...properties);
    return element;
}
