import { initIcon } from "./icon.js";

//the url of the voice chat svg; resolved relative to this module
const URL_VOICECHAT = new URL('../../assets/icons/voiceChat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a voice chat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/voiceChat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVoiceChatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOICECHAT }, ...properties);
}

/**
 * Creates a voice chat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const voiceChatIcon = (...properties) => {
    const element = document.createElement('div');
    initVoiceChatIcon(element, ...properties);
    return element;
}
