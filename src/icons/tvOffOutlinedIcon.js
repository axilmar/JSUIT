import { initIcon } from "./icon.js";

//the url of the tv off outlined svg; resolved relative to this module
const URL_TVOFFOUTLINED = new URL('../../assets/icons/tvOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tv off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tvOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTvOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TVOFFOUTLINED }, ...properties);
}

/**
 * Creates a tv off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tvOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTvOffOutlinedIcon(element, ...properties);
    return element;
}
