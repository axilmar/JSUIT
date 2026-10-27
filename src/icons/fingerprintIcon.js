import { initIcon } from "./icon.js";

//the url of the fingerprint svg; resolved relative to this module
const URL_FINGERPRINT = new URL('../../assets/icons/fingerprint.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fingerprint icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fingerprint.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFingerprintIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fingerprintIcon', url: URL_FINGERPRINT }, ...properties);
}

/**
 * Creates a fingerprint icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fingerprintIcon = (...properties) => {
    const element = document.createElement('div');
    initFingerprintIcon(element, ...properties);
    return element;
}
