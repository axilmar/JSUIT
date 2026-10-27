import { initIcon } from "./icon.js";

//the url of the blur on outlined svg; resolved relative to this module
const URL_BLURONOUTLINED = new URL('../../assets/icons/blurOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blurOnOutlinedIcon', url: URL_BLURONOUTLINED }, ...properties);
}

/**
 * Creates a blur on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurOnOutlinedIcon(element, ...properties);
    return element;
}
