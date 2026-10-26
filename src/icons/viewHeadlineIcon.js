import { initIcon } from "./icon.js";

//the url of the view headline svg; resolved relative to this module
const URL_VIEWHEADLINE = new URL('../../assets/icons/viewHeadline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view headline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewHeadline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewHeadlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWHEADLINE }, ...properties);
}

/**
 * Creates a view headline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewHeadlineIcon = (...properties) => {
    const element = document.createElement('div');
    initViewHeadlineIcon(element, ...properties);
    return element;
}
