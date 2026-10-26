import { initIcon } from "./icon.js";

//the url of the voicemail outlined svg; resolved relative to this module
const URL_VOICEMAILOUTLINED = new URL('../../assets/icons/voicemailOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a voicemail outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/voicemailOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVoicemailOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOICEMAILOUTLINED }, ...properties);
}

/**
 * Creates a voicemail outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const voicemailOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVoicemailOutlinedIcon(element, ...properties);
    return element;
}
