import { initIcon } from "./icon.js";

//the url of the density small svg; resolved relative to this module
const URL_DENSITYSMALL = new URL('../../assets/icons/densitySmall.svg', import.meta.url).href;

/**
 * Initializes an icon element as a density small icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/densitySmall.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDensitySmallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'densitySmallIcon', url: URL_DENSITYSMALL }, ...properties);
}

/**
 * Creates a density small icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const densitySmallIcon = (...properties) => {
    const element = document.createElement('div');
    initDensitySmallIcon(element, ...properties);
    return element;
}
