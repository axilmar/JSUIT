import { initIcon } from "./icon.js";

//the url of the keyboard command key outlined svg; resolved relative to this module
const URL_KEYBOARDCOMMANDKEYOUTLINED = new URL('../../assets/icons/keyboardCommandKeyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard command key outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardCommandKeyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardCommandKeyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardCommandKeyOutlinedIcon', url: URL_KEYBOARDCOMMANDKEYOUTLINED }, ...properties);
}

/**
 * Creates a keyboard command key outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardCommandKeyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardCommandKeyOutlinedIcon(element, ...properties);
    return element;
}
