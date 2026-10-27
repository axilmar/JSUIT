import { initIcon } from "./icon.js";

//the url of the cake outlined svg; resolved relative to this module
const URL_CAKEOUTLINED = new URL('../../assets/icons/cakeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cake outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cakeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCakeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cakeOutlinedIcon', url: URL_CAKEOUTLINED }, ...properties);
}

/**
 * Creates a cake outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cakeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCakeOutlinedIcon(element, ...properties);
    return element;
}
