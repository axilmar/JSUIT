import { initIcon } from "./icon.js";

//the url of the business outlined svg; resolved relative to this module
const URL_BUSINESSOUTLINED = new URL('../../assets/icons/businessOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a business outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/businessOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBusinessOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUSINESSOUTLINED }, ...properties);
}

/**
 * Creates a business outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const businessOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBusinessOutlinedIcon(element, ...properties);
    return element;
}
