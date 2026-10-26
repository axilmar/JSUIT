import { initIcon } from "./icon.js";

//the url of the business center outlined svg; resolved relative to this module
const URL_BUSINESSCENTEROUTLINED = new URL('../../assets/icons/businessCenterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a business center outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/businessCenterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBusinessCenterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUSINESSCENTEROUTLINED }, ...properties);
}

/**
 * Creates a business center outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const businessCenterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBusinessCenterOutlinedIcon(element, ...properties);
    return element;
}
