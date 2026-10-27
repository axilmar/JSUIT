import { initIcon } from "./icon.js";

//the url of the voice over off outlined svg; resolved relative to this module
const URL_VOICEOVEROFFOUTLINED = new URL('../../assets/icons/voiceOverOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a voice over off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/voiceOverOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVoiceOverOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'voiceOverOffOutlinedIcon', url: URL_VOICEOVEROFFOUTLINED }, ...properties);
}

/**
 * Creates a voice over off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const voiceOverOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVoiceOverOffOutlinedIcon(element, ...properties);
    return element;
}
