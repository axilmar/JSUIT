import { initIcon } from "./icon.js";

//the url of the markunread outlined svg; resolved relative to this module
const URL_MARKUNREADOUTLINED = new URL('../../assets/icons/markunreadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a markunread outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markunreadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkunreadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKUNREADOUTLINED }, ...properties);
}

/**
 * Creates a markunread outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markunreadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkunreadOutlinedIcon(element, ...properties);
    return element;
}
