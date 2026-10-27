import { initIcon } from "./icon.js";

//the url of the filter none outlined svg; resolved relative to this module
const URL_FILTERNONEOUTLINED = new URL('../../assets/icons/filterNoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter none outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterNoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterNoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterNoneOutlinedIcon', url: URL_FILTERNONEOUTLINED }, ...properties);
}

/**
 * Creates a filter none outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterNoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterNoneOutlinedIcon(element, ...properties);
    return element;
}
