import { initIcon } from "./icon.js";

//the url of the splitscreen outlined svg; resolved relative to this module
const URL_SPLITSCREENOUTLINED = new URL('../../assets/icons/splitscreenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a splitscreen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/splitscreenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSplitscreenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'splitscreenOutlinedIcon', url: URL_SPLITSCREENOUTLINED }, ...properties);
}

/**
 * Creates a splitscreen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const splitscreenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSplitscreenOutlinedIcon(element, ...properties);
    return element;
}
