import { initIcon } from "./icon.js";

//the url of the feed outlined svg; resolved relative to this module
const URL_FEEDOUTLINED = new URL('../../assets/icons/feedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a feed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/feedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'feedOutlinedIcon', url: URL_FEEDOUTLINED }, ...properties);
}

/**
 * Creates a feed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const feedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFeedOutlinedIcon(element, ...properties);
    return element;
}
