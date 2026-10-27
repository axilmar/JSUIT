import { initIcon } from "./icon.js";

//the url of the phone forwarded outlined svg; resolved relative to this module
const URL_PHONEFORWARDEDOUTLINED = new URL('../../assets/icons/phoneForwardedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone forwarded outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneForwardedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneForwardedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneForwardedOutlinedIcon', url: URL_PHONEFORWARDEDOUTLINED }, ...properties);
}

/**
 * Creates a phone forwarded outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneForwardedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneForwardedOutlinedIcon(element, ...properties);
    return element;
}
