import { initIcon } from "./icon.js";

//the url of the density medium svg; resolved relative to this module
const URL_DENSITYMEDIUM = new URL('../../assets/icons/densityMedium.svg', import.meta.url).href;

/**
 * Initializes an icon element as a density medium icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/densityMedium.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDensityMediumIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'densityMediumIcon', url: URL_DENSITYMEDIUM }, ...properties);
}

/**
 * Creates a density medium icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const densityMediumIcon = (...properties) => {
    const element = document.createElement('div');
    initDensityMediumIcon(element, ...properties);
    return element;
}
