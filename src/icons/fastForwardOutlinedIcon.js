import { initIcon } from "./icon.js";

//the url of the fast forward outlined svg; resolved relative to this module
const URL_FASTFORWARDOUTLINED = new URL('../../assets/icons/fastForwardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fast forward outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fastForwardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFastForwardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FASTFORWARDOUTLINED }, ...properties);
}

/**
 * Creates a fast forward outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fastForwardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFastForwardOutlinedIcon(element, ...properties);
    return element;
}
