import { initIcon } from "./icon.js";

//the url of the feed svg; resolved relative to this module
const URL_FEED = new URL('../../assets/icons/feed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a feed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/feed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FEED }, ...properties);
}

/**
 * Creates a feed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const feedIcon = (...properties) => {
    const element = document.createElement('div');
    initFeedIcon(element, ...properties);
    return element;
}
