import { initIcon } from "./icon.js";

//the url of the privacy tip svg; resolved relative to this module
const URL_PRIVACYTIP = new URL('../../assets/icons/privacyTip.svg', import.meta.url).href;

/**
 * Initializes an icon element as a privacy tip icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/privacyTip.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrivacyTipIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'privacyTipIcon', url: URL_PRIVACYTIP }, ...properties);
}

/**
 * Creates a privacy tip icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const privacyTipIcon = (...properties) => {
    const element = document.createElement('div');
    initPrivacyTipIcon(element, ...properties);
    return element;
}
