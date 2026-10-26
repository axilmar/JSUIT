import { initIcon } from "./icon.js";

//the url of the audiotrack outlined svg; resolved relative to this module
const URL_AUDIOTRACKOUTLINED = new URL('../../assets/icons/audiotrackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an audiotrack outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/audiotrackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAudiotrackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUDIOTRACKOUTLINED }, ...properties);
}

/**
 * Creates an audiotrack outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const audiotrackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAudiotrackOutlinedIcon(element, ...properties);
    return element;
}
