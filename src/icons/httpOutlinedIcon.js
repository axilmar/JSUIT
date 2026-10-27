import { initIcon } from "./icon.js";

//the url of the http outlined svg; resolved relative to this module
const URL_HTTPOUTLINED = new URL('../../assets/icons/httpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a http outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/httpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHttpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'httpOutlinedIcon', url: URL_HTTPOUTLINED }, ...properties);
}

/**
 * Creates a http outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const httpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHttpOutlinedIcon(element, ...properties);
    return element;
}
