import { initIcon } from "./icon.js";

//the url of the analytics svg; resolved relative to this module
const URL_ANALYTICS = new URL('../../assets/icons/analytics.svg', import.meta.url).href;

/**
 * Initializes an icon element as an analytics icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/analytics.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnalyticsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ANALYTICS }, ...properties);
}

/**
 * Creates an analytics icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const analyticsIcon = (...properties) => {
    const element = document.createElement('div');
    initAnalyticsIcon(element, ...properties);
    return element;
}
