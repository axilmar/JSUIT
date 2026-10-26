import { initIcon } from "./icon.js";

//the url of the chat bubble outline svg; resolved relative to this module
const URL_CHATBUBBLEOUTLINE = new URL('../../assets/icons/chatBubbleOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chat bubble outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chatBubbleOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChatBubbleOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHATBUBBLEOUTLINE }, ...properties);
}

/**
 * Creates a chat bubble outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chatBubbleOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initChatBubbleOutlineIcon(element, ...properties);
    return element;
}
