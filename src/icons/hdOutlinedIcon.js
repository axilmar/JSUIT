import { initIcon } from "./icon.js";

//the url of the hd outlined svg; resolved relative to this module
const URL_HDOUTLINED = new URL('../../assets/icons/hdOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hd outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdOutlinedIcon', url: URL_HDOUTLINED }, ...properties);
}

/**
 * Creates a hd outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdOutlinedIcon(element, ...properties);
    return element;
}
