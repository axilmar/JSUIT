import { initIcon } from "./icon.js";

//the url of the h plus mobiledata svg; resolved relative to this module
const URL_HPLUSMOBILEDATA = new URL('../../assets/icons/hPlusMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a h plus mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hPlusMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHPlusMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hPlusMobiledataIcon', url: URL_HPLUSMOBILEDATA }, ...properties);
}

/**
 * Creates a h plus mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hPlusMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initHPlusMobiledataIcon(element, ...properties);
    return element;
}
