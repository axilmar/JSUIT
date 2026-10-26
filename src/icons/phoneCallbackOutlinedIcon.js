import { initIcon } from "./icon.js";

//the url of the phone callback outlined svg; resolved relative to this module
const URL_PHONECALLBACKOUTLINED = new URL('../../assets/icons/phoneCallbackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone callback outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneCallbackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneCallbackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONECALLBACKOUTLINED }, ...properties);
}

/**
 * Creates a phone callback outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneCallbackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneCallbackOutlinedIcon(element, ...properties);
    return element;
}
