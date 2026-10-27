import { initIcon } from "./icon.js";

//the url of the safety check outlined svg; resolved relative to this module
const URL_SAFETYCHECKOUTLINED = new URL('../../assets/icons/safetyCheckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a safety check outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/safetyCheckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSafetyCheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'safetyCheckOutlinedIcon', url: URL_SAFETYCHECKOUTLINED }, ...properties);
}

/**
 * Creates a safety check outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const safetyCheckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSafetyCheckOutlinedIcon(element, ...properties);
    return element;
}
