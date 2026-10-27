import { initIcon } from "./icon.js";

//the url of the keyboard voice outlined svg; resolved relative to this module
const URL_KEYBOARDVOICEOUTLINED = new URL('../../assets/icons/keyboardVoiceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard voice outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardVoiceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardVoiceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardVoiceOutlinedIcon', url: URL_KEYBOARDVOICEOUTLINED }, ...properties);
}

/**
 * Creates a keyboard voice outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardVoiceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardVoiceOutlinedIcon(element, ...properties);
    return element;
}
