import { initIcon } from "./icon.js";

//the url of the video chat svg; resolved relative to this module
const URL_VIDEOCHAT = new URL('../../assets/icons/videoChat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video chat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoChat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoChatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoChatIcon', url: URL_VIDEOCHAT }, ...properties);
}

/**
 * Creates a video chat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoChatIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoChatIcon(element, ...properties);
    return element;
}
