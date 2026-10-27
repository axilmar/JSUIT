import { initIcon } from "./icon.js";

//the url of the keyboard return outlined svg; resolved relative to this module
const URL_KEYBOARDRETURNOUTLINED = new URL('../../assets/icons/keyboardReturnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard return outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardReturnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardReturnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'keyboardReturnOutlinedIcon', url: URL_KEYBOARDRETURNOUTLINED }, ...properties);
}

/**
 * Creates a keyboard return outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardReturnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardReturnOutlinedIcon(element, ...properties);
    return element;
}
