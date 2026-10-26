import { initIcon } from "./icon.js";

//the url of the contact phone outlined svg; resolved relative to this module
const URL_CONTACTPHONEOUTLINED = new URL('../../assets/icons/contactPhoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact phone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactPhoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactPhoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTACTPHONEOUTLINED }, ...properties);
}

/**
 * Creates a contact phone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactPhoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContactPhoneOutlinedIcon(element, ...properties);
    return element;
}
