import { initIcon } from "./icon.js";

//the url of the transcribe svg; resolved relative to this module
const URL_TRANSCRIBE = new URL('../../assets/icons/transcribe.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transcribe icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transcribe.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTranscribeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRANSCRIBE }, ...properties);
}

/**
 * Creates a transcribe icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transcribeIcon = (...properties) => {
    const element = document.createElement('div');
    initTranscribeIcon(element, ...properties);
    return element;
}
