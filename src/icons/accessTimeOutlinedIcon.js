import { initIcon } from "./icon.js";

//the url of the access time outlined svg; resolved relative to this module
const URL_ACCESSTIMEOUTLINED = new URL('../../assets/icons/accessTimeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an access time outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessTimeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessTimeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessTimeOutlinedIcon', url: URL_ACCESSTIMEOUTLINED }, ...properties);
}

/**
 * Creates an access time outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessTimeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessTimeOutlinedIcon(element, ...properties);
    return element;
}
