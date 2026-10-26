import { initIcon } from "./icon.js";

//the url of the speaker phone outlined svg; resolved relative to this module
const URL_SPEAKERPHONEOUTLINED = new URL('../../assets/icons/speakerPhoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speaker phone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speakerPhoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeakerPhoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SPEAKERPHONEOUTLINED }, ...properties);
}

/**
 * Creates a speaker phone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speakerPhoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeakerPhoneOutlinedIcon(element, ...properties);
    return element;
}
