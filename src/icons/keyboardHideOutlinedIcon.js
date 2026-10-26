import { initIcon } from "./icon.js";

//the url of the keyboard hide outlined svg; resolved relative to this module
const URL_KEYBOARDHIDEOUTLINED = new URL('../../assets/icons/keyboardHideOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a keyboard hide outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyboardHideOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyboardHideOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYBOARDHIDEOUTLINED }, ...properties);
}

/**
 * Creates a keyboard hide outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyboardHideOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyboardHideOutlinedIcon(element, ...properties);
    return element;
}
