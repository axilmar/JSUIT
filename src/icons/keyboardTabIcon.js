import { initIcon } from "./icon.js";

//the url of the keyboard tab svg; resolved relative to this module
const URL_KEYBOARDTAB = new URL('../../assets/icons/keyboardTab.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard tab icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardTab.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardTabIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardTabIcon', url: URL_KEYBOARDTAB }, ...properties);
}

/**
 * Creates a keyboard tab icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardTabIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardTabIcon(element, ...properties);
    return element;
}
