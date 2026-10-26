import { initIcon } from "./icon.js";

//the url of the keyboard option key outlined svg; resolved relative to this module
const URL_KEYBOARDOPTIONKEYOUTLINED = new URL('../../assets/icons/keyboardOptionKeyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard option key outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardOptionKeyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardOptionKeyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDOPTIONKEYOUTLINED }, ...properties);
}

/**
 * Creates a keyboard option key outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardOptionKeyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardOptionKeyOutlinedIcon(element, ...properties);
    return element;
}
