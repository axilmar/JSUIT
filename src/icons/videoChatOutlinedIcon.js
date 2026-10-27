import { initIcon } from "./icon.js";

//the url of the video chat outlined svg; resolved relative to this module
const URL_VIDEOCHATOUTLINED = new URL('../../assets/icons/videoChatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video chat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoChatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoChatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoChatOutlinedIcon', url: URL_VIDEOCHATOUTLINED }, ...properties);
}

/**
 * Creates a video chat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoChatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoChatOutlinedIcon(element, ...properties);
    return element;
}
