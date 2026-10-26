import { initIcon } from "./icon.js";

//the url of the open with outlined svg; resolved relative to this module
const URL_OPENWITHOUTLINED = new URL('../../assets/icons/openWithOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an open with outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/openWithOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpenWithOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OPENWITHOUTLINED }, ...properties);
}

/**
 * Creates an open with outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const openWithOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOpenWithOutlinedIcon(element, ...properties);
    return element;
}
