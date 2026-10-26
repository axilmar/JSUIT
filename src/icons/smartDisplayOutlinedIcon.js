import { initIcon } from "./icon.js";

//the url of the smart display outlined svg; resolved relative to this module
const URL_SMARTDISPLAYOUTLINED = new URL('../../assets/icons/smartDisplayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smart display outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartDisplayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartDisplayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SMARTDISPLAYOUTLINED }, ...properties);
}

/**
 * Creates a smart display outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartDisplayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartDisplayOutlinedIcon(element, ...properties);
    return element;
}
