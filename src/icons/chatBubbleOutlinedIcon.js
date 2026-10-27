import { initIcon } from "./icon.js";

//the url of the chat bubble outlined svg; resolved relative to this module
const URL_CHATBUBBLEOUTLINED = new URL('../../assets/icons/chatBubbleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chat bubble outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chatBubbleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChatBubbleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chatBubbleOutlinedIcon', url: URL_CHATBUBBLEOUTLINED }, ...properties);
}

/**
 * Creates a chat bubble outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chatBubbleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChatBubbleOutlinedIcon(element, ...properties);
    return element;
}
