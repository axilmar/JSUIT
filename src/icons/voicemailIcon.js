import { initIcon } from "./icon.js";

//the url of the voicemail svg; resolved relative to this module
const URL_VOICEMAIL = new URL('../../assets/icons/voicemail.svg', import.meta.url).href;

/**
 * Initializes an icon element as a voicemail icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/voicemail.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVoicemailIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'voicemailIcon', url: URL_VOICEMAIL }, ...properties);
}

/**
 * Creates a voicemail icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const voicemailIcon = (...properties) => {
    const element = document.createElement('div');
    initVoicemailIcon(element, ...properties);
    return element;
}
