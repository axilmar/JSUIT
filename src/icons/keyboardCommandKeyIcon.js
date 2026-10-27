import { initIcon } from "./icon.js";

//the url of the keyboard command key svg; resolved relative to this module
const URL_KEYBOARDCOMMANDKEY = new URL('../../assets/icons/keyboardCommandKey.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard command key icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardCommandKey.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardCommandKeyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardCommandKeyIcon', url: URL_KEYBOARDCOMMANDKEY }, ...properties);
}

/**
 * Creates a keyboard command key icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardCommandKeyIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardCommandKeyIcon(element, ...properties);
    return element;
}
