import { initIcon } from "./icon.js";

//the url of the chat svg; resolved relative to this module
const URL_CHAT = new URL('../../assets/icons/chat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chatIcon', url: URL_CHAT }, ...properties);
}

/**
 * Creates a chat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chatIcon = (...properties) => {
    const element = document.createElement('div');
    initChatIcon(element, ...properties);
    return element;
}
