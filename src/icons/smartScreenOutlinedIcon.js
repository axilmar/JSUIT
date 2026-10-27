import { initIcon } from "./icon.js";

//the url of the smart screen outlined svg; resolved relative to this module
const URL_SMARTSCREENOUTLINED = new URL('../../assets/icons/smartScreenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smart screen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartScreenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartScreenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'smartScreenOutlinedIcon', url: URL_SMARTSCREENOUTLINED }, ...properties);
}

/**
 * Creates a smart screen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartScreenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartScreenOutlinedIcon(element, ...properties);
    return element;
}
