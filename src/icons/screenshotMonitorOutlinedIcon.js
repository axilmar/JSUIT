import { initIcon } from "./icon.js";

//the url of the screenshot monitor outlined svg; resolved relative to this module
const URL_SCREENSHOTMONITOROUTLINED = new URL('../../assets/icons/screenshotMonitorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screenshot monitor outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenshotMonitorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenshotMonitorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENSHOTMONITOROUTLINED }, ...properties);
}

/**
 * Creates a screenshot monitor outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenshotMonitorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenshotMonitorOutlinedIcon(element, ...properties);
    return element;
}
