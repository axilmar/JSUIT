import { initIcon } from "./icon.js";

//the url of the broken image outlined svg; resolved relative to this module
const URL_BROKENIMAGEOUTLINED = new URL('../../assets/icons/brokenImageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a broken image outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brokenImageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrokenImageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brokenImageOutlinedIcon', url: URL_BROKENIMAGEOUTLINED }, ...properties);
}

/**
 * Creates a broken image outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brokenImageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrokenImageOutlinedIcon(element, ...properties);
    return element;
}
