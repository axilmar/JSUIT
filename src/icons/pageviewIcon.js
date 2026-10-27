import { initIcon } from "./icon.js";

//the url of the pageview svg; resolved relative to this module
const URL_PAGEVIEW = new URL('../../assets/icons/pageview.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pageview icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pageview.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPageviewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pageviewIcon', url: URL_PAGEVIEW }, ...properties);
}

/**
 * Creates a pageview icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pageviewIcon = (...properties) => {
    const element = document.createElement('div');
    initPageviewIcon(element, ...properties);
    return element;
}
