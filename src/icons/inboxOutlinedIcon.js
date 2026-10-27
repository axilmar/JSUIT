import { initIcon } from "./icon.js";

//the url of the inbox outlined svg; resolved relative to this module
const URL_INBOXOUTLINED = new URL('../../assets/icons/inboxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an inbox outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/inboxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInboxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'inboxOutlinedIcon', url: URL_INBOXOUTLINED }, ...properties);
}

/**
 * Creates an inbox outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const inboxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInboxOutlinedIcon(element, ...properties);
    return element;
}
