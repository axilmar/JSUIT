import { initIcon } from "./icon.js";

//the url of the chat bubble svg; resolved relative to this module
const URL_CHATBUBBLE = new URL('../../assets/icons/chatBubble.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chat bubble icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chatBubble.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChatBubbleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chatBubbleIcon', url: URL_CHATBUBBLE }, ...properties);
}

/**
 * Creates a chat bubble icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chatBubbleIcon = (...properties) => {
    const element = document.createElement('div');
    initChatBubbleIcon(element, ...properties);
    return element;
}
