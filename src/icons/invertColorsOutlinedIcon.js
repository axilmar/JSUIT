import { initIcon } from "./icon.js";

//the url of the invert colors outlined svg; resolved relative to this module
const URL_INVERTCOLORSOUTLINED = new URL('../../assets/icons/invertColorsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an invert colors outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/invertColorsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInvertColorsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INVERTCOLORSOUTLINED }, ...properties);
}

/**
 * Creates an invert colors outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const invertColorsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInvertColorsOutlinedIcon(element, ...properties);
    return element;
}
