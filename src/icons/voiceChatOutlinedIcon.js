import { initIcon } from "./icon.js";

//the url of the voice chat outlined svg; resolved relative to this module
const URL_VOICECHATOUTLINED = new URL('../../assets/icons/voiceChatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a voice chat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/voiceChatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVoiceChatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOICECHATOUTLINED }, ...properties);
}

/**
 * Creates a voice chat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const voiceChatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVoiceChatOutlinedIcon(element, ...properties);
    return element;
}
