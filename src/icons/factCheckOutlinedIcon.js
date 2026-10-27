import { initIcon } from "./icon.js";

//the url of the fact check outlined svg; resolved relative to this module
const URL_FACTCHECKOUTLINED = new URL('../../assets/icons/factCheckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fact check outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/factCheckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFactCheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'factCheckOutlinedIcon', url: URL_FACTCHECKOUTLINED }, ...properties);
}

/**
 * Creates a fact check outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const factCheckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFactCheckOutlinedIcon(element, ...properties);
    return element;
}
