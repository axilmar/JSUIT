import { initIcon } from "./icon.js";

//the url of the mic none outlined svg; resolved relative to this module
const URL_MICNONEOUTLINED = new URL('../../assets/icons/micNoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic none outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micNoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicNoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICNONEOUTLINED }, ...properties);
}

/**
 * Creates a mic none outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micNoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMicNoneOutlinedIcon(element, ...properties);
    return element;
}
