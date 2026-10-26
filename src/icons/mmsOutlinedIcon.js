import { initIcon } from "./icon.js";

//the url of the mms outlined svg; resolved relative to this module
const URL_MMSOUTLINED = new URL('../../assets/icons/mmsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mms outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mmsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMmsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MMSOUTLINED }, ...properties);
}

/**
 * Creates a mms outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mmsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMmsOutlinedIcon(element, ...properties);
    return element;
}
