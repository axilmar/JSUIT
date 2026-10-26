import { initIcon } from "./icon.js";

//the url of the person outline outlined svg; resolved relative to this module
const URL_PERSONOUTLINEOUTLINED = new URL('../../assets/icons/personOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a person outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonOutlineOutlinedIcon(element, ...properties);
    return element;
}
