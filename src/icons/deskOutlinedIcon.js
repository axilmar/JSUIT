import { initIcon } from "./icon.js";

//the url of the desk outlined svg; resolved relative to this module
const URL_DESKOUTLINED = new URL('../../assets/icons/deskOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desk outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deskOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeskOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deskOutlinedIcon', url: URL_DESKOUTLINED }, ...properties);
}

/**
 * Creates a desk outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deskOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeskOutlinedIcon(element, ...properties);
    return element;
}
