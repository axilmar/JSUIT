import { initIcon } from "./icon.js";

//the url of the high quality outlined svg; resolved relative to this module
const URL_HIGHQUALITYOUTLINED = new URL('../../assets/icons/highQualityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a high quality outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highQualityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighQualityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'highQualityOutlinedIcon', url: URL_HIGHQUALITYOUTLINED }, ...properties);
}

/**
 * Creates a high quality outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highQualityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHighQualityOutlinedIcon(element, ...properties);
    return element;
}
