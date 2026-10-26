import { initIcon } from "./icon.js";

//the url of the speaker phone svg; resolved relative to this module
const URL_SPEAKERPHONE = new URL('../../assets/icons/speakerPhone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker phone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerPhone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerPhoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPEAKERPHONE }, ...properties);
}

/**
 * Creates a speaker phone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerPhoneIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerPhoneIcon(element, ...properties);
    return element;
}
