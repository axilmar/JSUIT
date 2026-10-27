import { initIcon } from "./icon.js";

//the url of the local offer svg; resolved relative to this module
const URL_LOCALOFFER = new URL('../../assets/icons/localOffer.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local offer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localOffer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalOfferIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localOfferIcon', url: URL_LOCALOFFER }, ...properties);
}

/**
 * Creates a local offer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localOfferIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalOfferIcon(element, ...properties);
    return element;
}
