import { initIcon } from "./icon.js";

//the url of the phone android outlined svg; resolved relative to this module
const URL_PHONEANDROIDOUTLINED = new URL('../../assets/icons/phoneAndroidOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone android outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneAndroidOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneAndroidOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONEANDROIDOUTLINED }, ...properties);
}

/**
 * Creates a phone android outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneAndroidOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneAndroidOutlinedIcon(element, ...properties);
    return element;
}
