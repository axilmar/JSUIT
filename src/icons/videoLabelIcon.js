import { initIcon } from "./icon.js";

//the url of the video label svg; resolved relative to this module
const URL_VIDEOLABEL = new URL('../../assets/icons/videoLabel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video label icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoLabel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoLabelIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videoLabelIcon', url: URL_VIDEOLABEL }, ...properties);
}

/**
 * Creates a video label icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoLabelIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoLabelIcon(element, ...properties);
    return element;
}
