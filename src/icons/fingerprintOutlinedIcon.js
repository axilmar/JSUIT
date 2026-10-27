import { initIcon } from "./icon.js";

//the url of the fingerprint outlined svg; resolved relative to this module
const URL_FINGERPRINTOUTLINED = new URL('../../assets/icons/fingerprintOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fingerprint outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fingerprintOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFingerprintOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fingerprintOutlinedIcon', url: URL_FINGERPRINTOUTLINED }, ...properties);
}

/**
 * Creates a fingerprint outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fingerprintOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFingerprintOutlinedIcon(element, ...properties);
    return element;
}
