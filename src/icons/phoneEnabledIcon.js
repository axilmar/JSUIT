import { initIcon } from "./icon.js";

//the url of the phone enabled svg; resolved relative to this module
const URL_PHONEENABLED = new URL('../../assets/icons/phoneEnabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone enabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneEnabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneEnabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneEnabledIcon', url: URL_PHONEENABLED }, ...properties);
}

/**
 * Creates a phone enabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneEnabledIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneEnabledIcon(element, ...properties);
    return element;
}
