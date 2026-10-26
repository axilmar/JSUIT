import { initIcon } from "./icon.js";

//the url of the iso outlined svg; resolved relative to this module
const URL_ISOOUTLINED = new URL('../../assets/icons/isoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an iso outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/isoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIsoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ISOOUTLINED }, ...properties);
}

/**
 * Creates an iso outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const isoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initIsoOutlinedIcon(element, ...properties);
    return element;
}
