import { initIcon } from "./icon.js";

//the url of the width full outlined svg; resolved relative to this module
const URL_WIDTHFULLOUTLINED = new URL('../../assets/icons/widthFullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a width full outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widthFullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidthFullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIDTHFULLOUTLINED }, ...properties);
}

/**
 * Creates a width full outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widthFullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWidthFullOutlinedIcon(element, ...properties);
    return element;
}
