import { initIcon } from "./icon.js";

//the url of the tty outlined svg; resolved relative to this module
const URL_TTYOUTLINED = new URL('../../assets/icons/ttyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tty outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ttyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTtyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TTYOUTLINED }, ...properties);
}

/**
 * Creates a tty outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ttyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTtyOutlinedIcon(element, ...properties);
    return element;
}
