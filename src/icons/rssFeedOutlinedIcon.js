import { initIcon } from "./icon.js";

//the url of the rss feed outlined svg; resolved relative to this module
const URL_RSSFEEDOUTLINED = new URL('../../assets/icons/rssFeedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rss feed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rssFeedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRssFeedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RSSFEEDOUTLINED }, ...properties);
}

/**
 * Creates a rss feed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rssFeedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRssFeedOutlinedIcon(element, ...properties);
    return element;
}
