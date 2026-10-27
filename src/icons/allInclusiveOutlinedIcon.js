import { initIcon } from "./icon.js";

//the url of the all inclusive outlined svg; resolved relative to this module
const URL_ALLINCLUSIVEOUTLINED = new URL('../../assets/icons/allInclusiveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an all inclusive outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/allInclusiveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAllInclusiveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'allInclusiveOutlinedIcon', url: URL_ALLINCLUSIVEOUTLINED }, ...properties);
}

/**
 * Creates an all inclusive outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const allInclusiveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAllInclusiveOutlinedIcon(element, ...properties);
    return element;
}
