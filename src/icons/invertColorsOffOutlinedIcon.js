import { initIcon } from "./icon.js";

//the url of the invert colors off outlined svg; resolved relative to this module
const URL_INVERTCOLORSOFFOUTLINED = new URL('../../assets/icons/invertColorsOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an invert colors off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/invertColorsOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInvertColorsOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INVERTCOLORSOFFOUTLINED }, ...properties);
}

/**
 * Creates an invert colors off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const invertColorsOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInvertColorsOffOutlinedIcon(element, ...properties);
    return element;
}
