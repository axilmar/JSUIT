import { initIcon } from "./icon.js";

//the url of the phone forwarded svg; resolved relative to this module
const URL_PHONEFORWARDED = new URL('../../assets/icons/phoneForwarded.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone forwarded icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneForwarded.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneForwardedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneForwardedIcon', url: URL_PHONEFORWARDED }, ...properties);
}

/**
 * Creates a phone forwarded icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneForwardedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneForwardedIcon(element, ...properties);
    return element;
}
