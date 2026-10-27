import { initIcon } from "./icon.js";

//the url of the web outlined svg; resolved relative to this module
const URL_WEBOUTLINED = new URL('../../assets/icons/webOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a web outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/webOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWebOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'webOutlinedIcon', url: URL_WEBOUTLINED }, ...properties);
}

/**
 * Creates a web outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const webOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWebOutlinedIcon(element, ...properties);
    return element;
}
