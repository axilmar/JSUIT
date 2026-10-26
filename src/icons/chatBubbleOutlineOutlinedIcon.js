import { initIcon } from "./icon.js";

//the url of the chat bubble outline outlined svg; resolved relative to this module
const URL_CHATBUBBLEOUTLINEOUTLINED = new URL('../../assets/icons/chatBubbleOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chat bubble outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chatBubbleOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChatBubbleOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHATBUBBLEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a chat bubble outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chatBubbleOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChatBubbleOutlineOutlinedIcon(element, ...properties);
    return element;
}
