import { initIcon } from "./icon.js";

//the url of the attribution svg; resolved relative to this module
const URL_ATTRIBUTION = new URL('../../assets/icons/attribution.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attribution icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attribution.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttributionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'attributionIcon', url: URL_ATTRIBUTION }, ...properties);
}

/**
 * Creates an attribution icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attributionIcon = (...properties) => {
    const element = document.createElement('div');
    initAttributionIcon(element, ...properties);
    return element;
}
