import { initIcon } from "./icon.js";

//the url of the transcribe outlined svg; resolved relative to this module
const URL_TRANSCRIBEOUTLINED = new URL('../../assets/icons/transcribeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transcribe outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transcribeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTranscribeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transcribeOutlinedIcon', url: URL_TRANSCRIBEOUTLINED }, ...properties);
}

/**
 * Creates a transcribe outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transcribeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTranscribeOutlinedIcon(element, ...properties);
    return element;
}
