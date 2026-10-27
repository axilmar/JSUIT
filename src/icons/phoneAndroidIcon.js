import { initIcon } from "./icon.js";

//the url of the phone android svg; resolved relative to this module
const URL_PHONEANDROID = new URL('../../assets/icons/phoneAndroid.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone android icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneAndroid.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneAndroidIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneAndroidIcon', url: URL_PHONEANDROID }, ...properties);
}

/**
 * Creates a phone android icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneAndroidIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneAndroidIcon(element, ...properties);
    return element;
}
