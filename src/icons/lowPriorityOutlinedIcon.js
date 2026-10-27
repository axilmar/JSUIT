import { initIcon } from "./icon.js";

//the url of the low priority outlined svg; resolved relative to this module
const URL_LOWPRIORITYOUTLINED = new URL('../../assets/icons/lowPriorityOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a low priority outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lowPriorityOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLowPriorityOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'lowPriorityOutlinedIcon', url: URL_LOWPRIORITYOUTLINED }, ...properties);
}

/**
 * Creates a low priority outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lowPriorityOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLowPriorityOutlinedIcon(element, ...properties);
    return element;
}
