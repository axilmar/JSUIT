import { initIcon } from "./icon.js";

//the url of the video label outlined svg; resolved relative to this module
const URL_VIDEOLABELOUTLINED = new URL('../../assets/icons/videoLabelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video label outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoLabelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoLabelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoLabelOutlinedIcon', url: URL_VIDEOLABELOUTLINED }, ...properties);
}

/**
 * Creates a video label outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoLabelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoLabelOutlinedIcon(element, ...properties);
    return element;
}
