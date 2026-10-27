import { initIcon } from "./icon.js";

//the url of the local phone svg; resolved relative to this module
const URL_LOCALPHONE = new URL('../../assets/icons/localPhone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local phone icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPhone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPhoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localPhoneIcon', url: URL_LOCALPHONE }, ...properties);
}

/**
 * Creates a local phone icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPhoneIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPhoneIcon(element, ...properties);
    return element;
}
