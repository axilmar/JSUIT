import { initIcon } from "./icon.js";

//the url of the api outlined svg; resolved relative to this module
const URL_APIOUTLINED = new URL('../../assets/icons/apiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an api outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/apiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initApiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'apiOutlinedIcon', url: URL_APIOUTLINED }, ...properties);
}

/**
 * Creates an api outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const apiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initApiOutlinedIcon(element, ...properties);
    return element;
}
