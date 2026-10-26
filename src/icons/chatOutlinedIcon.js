import { initIcon } from "./icon.js";

//the url of the chat outlined svg; resolved relative to this module
const URL_CHATOUTLINED = new URL('../../assets/icons/chatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHATOUTLINED }, ...properties);
}

/**
 * Creates a chat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChatOutlinedIcon(element, ...properties);
    return element;
}
