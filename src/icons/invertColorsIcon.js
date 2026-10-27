import { initIcon } from "./icon.js";

//the url of the invert colors svg; resolved relative to this module
const URL_INVERTCOLORS = new URL('../../assets/icons/invertColors.svg', import.meta.url).href;

/**
 * Initializes an icon element as an invert colors icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/invertColors.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInvertColorsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'invertColorsIcon', url: URL_INVERTCOLORS }, ...properties);
}

/**
 * Creates an invert colors icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const invertColorsIcon = (...properties) => {
    const element = document.createElement('div');
    initInvertColorsIcon(element, ...properties);
    return element;
}
