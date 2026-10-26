import { initIcon } from "./icon.js";

//the url of the smart button svg; resolved relative to this module
const URL_SMARTBUTTON = new URL('../../assets/icons/smartButton.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smart button icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartButton.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartButtonIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMARTBUTTON }, ...properties);
}

/**
 * Creates a smart button icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartButtonIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartButtonIcon(element, ...properties);
    return element;
}
