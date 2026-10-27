import { initIcon } from "./icon.js";

//the url of the star rate svg; resolved relative to this module
const URL_STARRATE = new URL('../../assets/icons/starRate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star rate icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starRate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarRateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'starRateIcon', url: URL_STARRATE }, ...properties);
}

/**
 * Creates a star rate icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starRateIcon = (...properties) => {
    const element = document.createElement('div');
    initStarRateIcon(element, ...properties);
    return element;
}
