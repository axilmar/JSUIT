import { initIcon } from "./icon.js";

//the url of the fast rewind outlined svg; resolved relative to this module
const URL_FASTREWINDOUTLINED = new URL('../../assets/icons/fastRewindOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fast rewind outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fastRewindOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFastRewindOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FASTREWINDOUTLINED }, ...properties);
}

/**
 * Creates a fast rewind outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fastRewindOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFastRewindOutlinedIcon(element, ...properties);
    return element;
}
