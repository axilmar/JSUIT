import { initIcon } from "./icon.js";

//the url of the phone iphone svg; resolved relative to this module
const URL_PHONEIPHONE = new URL('../../assets/icons/phoneIphone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone iphone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneIphone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneIphoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONEIPHONE }, ...properties);
}

/**
 * Creates a phone iphone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneIphoneIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneIphoneIcon(element, ...properties);
    return element;
}
