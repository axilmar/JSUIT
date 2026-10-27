import { initIcon } from "./icon.js";

//the url of the keyboard voice svg; resolved relative to this module
const URL_KEYBOARDVOICE = new URL('../../assets/icons/keyboardVoice.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard voice icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardVoice.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardVoiceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardVoiceIcon', url: URL_KEYBOARDVOICE }, ...properties);
}

/**
 * Creates a keyboard voice icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardVoiceIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardVoiceIcon(element, ...properties);
    return element;
}
