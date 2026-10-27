import { initIcon } from "./icon.js";

//the url of the autorenew outlined svg; resolved relative to this module
const URL_AUTORENEWOUTLINED = new URL('../../assets/icons/autorenewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an autorenew outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autorenewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutorenewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autorenewOutlinedIcon', url: URL_AUTORENEWOUTLINED }, ...properties);
}

/**
 * Creates an autorenew outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autorenewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutorenewOutlinedIcon(element, ...properties);
    return element;
}
