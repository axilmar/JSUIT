import { initIcon } from "./icon.js";

//the url of the business center svg; resolved relative to this module
const URL_BUSINESSCENTER = new URL('../../assets/icons/businessCenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a business center icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/businessCenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBusinessCenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'businessCenterIcon', url: URL_BUSINESSCENTER }, ...properties);
}

/**
 * Creates a business center icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const businessCenterIcon = (...properties) => {
    const element = document.createElement('div');
    initBusinessCenterIcon(element, ...properties);
    return element;
}
