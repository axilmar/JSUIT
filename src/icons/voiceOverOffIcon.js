import { initIcon } from "./icon.js";

//the url of the voice over off svg; resolved relative to this module
const URL_VOICEOVEROFF = new URL('../../assets/icons/voiceOverOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a voice over off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/voiceOverOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVoiceOverOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'voiceOverOffIcon', url: URL_VOICEOVEROFF }, ...properties);
}

/**
 * Creates a voice over off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const voiceOverOffIcon = (...properties) => {
    const element = document.createElement('div');
    initVoiceOverOffIcon(element, ...properties);
    return element;
}
