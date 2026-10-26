import { initIcon } from "./icon.js";

//the url of the person outlined svg; resolved relative to this module
const URL_PERSONOUTLINED = new URL('../../assets/icons/personOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONOUTLINED }, ...properties);
}

/**
 * Creates a person outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonOutlinedIcon(element, ...properties);
    return element;
}
