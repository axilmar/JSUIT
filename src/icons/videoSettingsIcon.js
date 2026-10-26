import { initIcon } from "./icon.js";

//the url of the video settings svg; resolved relative to this module
const URL_VIDEOSETTINGS = new URL('../../assets/icons/videoSettings.svg', import.meta.url).href;

/**
 * Initializes an icon element as a video settings icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videoSettings.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideoSettingsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOSETTINGS }, ...properties);
}

/**
 * Creates a video settings icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videoSettingsIcon = (...properties) => {
    const element = document.createElement('div');
    initVideoSettingsIcon(element, ...properties);
    return element;
}
