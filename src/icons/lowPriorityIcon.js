import { initIcon } from "./icon.js";

//the url of the low priority svg; resolved relative to this module
const URL_LOWPRIORITY = new URL('../../assets/icons/lowPriority.svg', import.meta.url).href;

/**
 * Initializes an icon element as a low priority icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lowPriority.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLowPriorityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lowPriorityIcon', url: URL_LOWPRIORITY }, ...properties);
}

/**
 * Creates a low priority icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lowPriorityIcon = (...properties) => {
    const element = document.createElement('div');
    initLowPriorityIcon(element, ...properties);
    return element;
}
