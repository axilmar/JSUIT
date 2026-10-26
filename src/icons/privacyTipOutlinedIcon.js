import { initIcon } from "./icon.js";

//the url of the privacy tip outlined svg; resolved relative to this module
const URL_PRIVACYTIPOUTLINED = new URL('../../assets/icons/privacyTipOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a privacy tip outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/privacyTipOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPrivacyTipOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRIVACYTIPOUTLINED }, ...properties);
}

/**
 * Creates a privacy tip outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const privacyTipOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPrivacyTipOutlinedIcon(element, ...properties);
    return element;
}
