import { initIcon } from "./icon.js";

//the url of the fullscreen outlined svg; resolved relative to this module
const URL_FULLSCREENOUTLINED = new URL('../../assets/icons/fullscreenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fullscreen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fullscreenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFullscreenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fullscreenOutlinedIcon', url: URL_FULLSCREENOUTLINED }, ...properties);
}

/**
 * Creates a fullscreen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fullscreenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFullscreenOutlinedIcon(element, ...properties);
    return element;
}
