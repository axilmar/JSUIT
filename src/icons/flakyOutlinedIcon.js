import { initIcon } from "./icon.js";

//the url of the flaky outlined svg; resolved relative to this module
const URL_FLAKYOUTLINED = new URL('../../assets/icons/flakyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flaky outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flakyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlakyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLAKYOUTLINED }, ...properties);
}

/**
 * Creates a flaky outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flakyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlakyOutlinedIcon(element, ...properties);
    return element;
}
