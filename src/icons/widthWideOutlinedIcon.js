import { initIcon } from "./icon.js";

//the url of the width wide outlined svg; resolved relative to this module
const URL_WIDTHWIDEOUTLINED = new URL('../../assets/icons/widthWideOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a width wide outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widthWideOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidthWideOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIDTHWIDEOUTLINED }, ...properties);
}

/**
 * Creates a width wide outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widthWideOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWidthWideOutlinedIcon(element, ...properties);
    return element;
}
