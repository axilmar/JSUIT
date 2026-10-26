import { initIcon } from "./icon.js";

//the url of the mic external off outlined svg; resolved relative to this module
const URL_MICEXTERNALOFFOUTLINED = new URL('../../assets/icons/micExternalOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic external off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micExternalOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicExternalOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICEXTERNALOFFOUTLINED }, ...properties);
}

/**
 * Creates a mic external off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micExternalOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMicExternalOffOutlinedIcon(element, ...properties);
    return element;
}
