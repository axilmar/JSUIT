import { initIcon } from "./icon.js";

//the url of the pageview outlined svg; resolved relative to this module
const URL_PAGEVIEWOUTLINED = new URL('../../assets/icons/pageviewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pageview outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pageviewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPageviewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pageviewOutlinedIcon', url: URL_PAGEVIEWOUTLINED }, ...properties);
}

/**
 * Creates a pageview outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pageviewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPageviewOutlinedIcon(element, ...properties);
    return element;
}
