import { initIcon } from "./icon.js";

//the url of the install mobile svg; resolved relative to this module
const URL_INSTALLMOBILE = new URL('../../assets/icons/installMobile.svg', import.meta.url).href;

/**
 * Initializes an icon element as an install mobile icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/installMobile.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInstallMobileIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'installMobileIcon', url: URL_INSTALLMOBILE }, ...properties);
}

/**
 * Creates an install mobile icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const installMobileIcon = (...properties) => {
    const element = document.createElement('div');
    initInstallMobileIcon(element, ...properties);
    return element;
}
