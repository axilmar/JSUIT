import { initIcon } from "./icon.js";

//the url of the analytics outlined svg; resolved relative to this module
const URL_ANALYTICSOUTLINED = new URL('../../assets/icons/analyticsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an analytics outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/analyticsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnalyticsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ANALYTICSOUTLINED }, ...properties);
}

/**
 * Creates an analytics outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const analyticsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAnalyticsOutlinedIcon(element, ...properties);
    return element;
}
