import { initIcon } from "./icon.js";

//the url of the audio file svg; resolved relative to this module
const URL_AUDIOFILE = new URL('../../assets/icons/audioFile.svg', import.meta.url).href;

/**
 * Initializes an icon element as an audio file icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/audioFile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAudioFileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'audioFileIcon', url: URL_AUDIOFILE }, ...properties);
}

/**
 * Creates an audio file icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const audioFileIcon = (...properties) => {
    const element = document.createElement('div');
    initAudioFileIcon(element, ...properties);
    return element;
}
