import { initIcon } from "./icon.js";

//the url of the local pharmacy svg; resolved relative to this module
const URL_LOCALPHARMACY = new URL('../../assets/icons/localPharmacy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local pharmacy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPharmacy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPharmacyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALPHARMACY }, ...properties);
}

/**
 * Creates a local pharmacy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPharmacyIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPharmacyIcon(element, ...properties);
    return element;
}
