import { initIcon } from "./icon.js";

//the url of the closed caption svg; resolved relative to this module
const URL_CLOSEDCAPTION = new URL('../../assets/icons/closedCaption.svg', import.meta.url).href;

/**
 * Initializes an icon element as a closed caption icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closedCaption.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClosedCaptionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOSEDCAPTION }, ...properties);
}

/**
 * Creates a closed caption icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closedCaptionIcon = (...properties) => {
    const element = document.createElement('div');
    initClosedCaptionIcon(element, ...properties);
    return element;
}
