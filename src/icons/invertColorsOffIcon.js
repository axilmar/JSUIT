import { initIcon } from "./icon.js";

//the url of the invert colors off svg; resolved relative to this module
const URL_INVERTCOLORSOFF = new URL('../../assets/icons/invertColorsOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as an invert colors off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/invertColorsOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInvertColorsOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INVERTCOLORSOFF }, ...properties);
}

/**
 * Creates an invert colors off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const invertColorsOffIcon = (...properties) => {
    const element = document.createElement('div');
    initInvertColorsOffIcon(element, ...properties);
    return element;
}
