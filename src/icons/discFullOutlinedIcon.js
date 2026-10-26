import { initIcon } from "./icon.js";

//the url of the disc full outlined svg; resolved relative to this module
const URL_DISCFULLOUTLINED = new URL('../../assets/icons/discFullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a disc full outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/discFullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiscFullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DISCFULLOUTLINED }, ...properties);
}

/**
 * Creates a disc full outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const discFullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDiscFullOutlinedIcon(element, ...properties);
    return element;
}
