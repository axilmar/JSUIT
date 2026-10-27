import { initIcon } from "./icon.js";

//the url of the speaker svg; resolved relative to this module
const URL_SPEAKER = new URL('../../assets/icons/speaker.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speaker.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'speakerIcon', url: URL_SPEAKER }, ...properties);
}

/**
 * Creates a speaker icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerIcon(element, ...properties);
    return element;
}
