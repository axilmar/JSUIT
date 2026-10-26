import { initIcon } from "./icon.js";

//the url of the raw off outlined svg; resolved relative to this module
const URL_RAWOFFOUTLINED = new URL('../../assets/icons/rawOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a raw off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rawOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRawOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAWOFFOUTLINED }, ...properties);
}

/**
 * Creates a raw off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rawOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRawOffOutlinedIcon(element, ...properties);
    return element;
}
