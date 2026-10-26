import { initIcon } from "./icon.js";

//the url of the adjust svg; resolved relative to this module
const URL_ADJUST = new URL('../../assets/icons/adjust.svg', import.meta.url).href;

/**
 * Initializes an icon element as an adjust icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adjust.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdjustIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADJUST }, ...properties);
}

/**
 * Creates an adjust icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adjustIcon = (...properties) => {
    const element = document.createElement('div');
    initAdjustIcon(element, ...properties);
    return element;
}
