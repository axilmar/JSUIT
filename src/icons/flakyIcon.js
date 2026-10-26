import { initIcon } from "./icon.js";

//the url of the flaky svg; resolved relative to this module
const URL_FLAKY = new URL('../../assets/icons/flaky.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flaky icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flaky.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlakyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLAKY }, ...properties);
}

/**
 * Creates a flaky icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flakyIcon = (...properties) => {
    const element = document.createElement('div');
    initFlakyIcon(element, ...properties);
    return element;
}
