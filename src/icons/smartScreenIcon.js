import { initIcon } from "./icon.js";

//the url of the smart screen svg; resolved relative to this module
const URL_SMARTSCREEN = new URL('../../assets/icons/smartScreen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smart screen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartScreen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartScreenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'smartScreenIcon', url: URL_SMARTSCREEN }, ...properties);
}

/**
 * Creates a smart screen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartScreenIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartScreenIcon(element, ...properties);
    return element;
}
