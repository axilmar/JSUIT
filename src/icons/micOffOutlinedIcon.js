import { initIcon } from "./icon.js";

//the url of the mic off outlined svg; resolved relative to this module
const URL_MICOFFOUTLINED = new URL('../../assets/icons/micOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICOFFOUTLINED }, ...properties);
}

/**
 * Creates a mic off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMicOffOutlinedIcon(element, ...properties);
    return element;
}
