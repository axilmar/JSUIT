import { initIcon } from "./icon.js";

//the url of the ads click svg; resolved relative to this module
const URL_ADSCLICK = new URL('../../assets/icons/adsClick.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ads click icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adsClick.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdsClickIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADSCLICK }, ...properties);
}

/**
 * Creates an ads click icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adsClickIcon = (...properties) => {
    const element = document.createElement('div');
    initAdsClickIcon(element, ...properties);
    return element;
}
