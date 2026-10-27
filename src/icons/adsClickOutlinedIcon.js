import { initIcon } from "./icon.js";

//the url of the ads click outlined svg; resolved relative to this module
const URL_ADSCLICKOUTLINED = new URL('../../assets/icons/adsClickOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ads click outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adsClickOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdsClickOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'adsClickOutlinedIcon', url: URL_ADSCLICKOUTLINED }, ...properties);
}

/**
 * Creates an ads click outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adsClickOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAdsClickOutlinedIcon(element, ...properties);
    return element;
}
