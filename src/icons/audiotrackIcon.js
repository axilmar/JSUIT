import { initIcon } from "./icon.js";

//the url of the audiotrack svg; resolved relative to this module
const URL_AUDIOTRACK = new URL('../../assets/icons/audiotrack.svg', import.meta.url).href;

/**
 * Initializes an icon element as an audiotrack icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/audiotrack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAudiotrackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'audiotrackIcon', url: URL_AUDIOTRACK }, ...properties);
}

/**
 * Creates an audiotrack icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const audiotrackIcon = (...properties) => {
    const element = document.createElement('div');
    initAudiotrackIcon(element, ...properties);
    return element;
}
