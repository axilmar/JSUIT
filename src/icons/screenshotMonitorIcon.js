import { initIcon } from "./icon.js";

//the url of the screenshot monitor svg; resolved relative to this module
const URL_SCREENSHOTMONITOR = new URL('../../assets/icons/screenshotMonitor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screenshot monitor icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenshotMonitor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenshotMonitorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'screenshotMonitorIcon', url: URL_SCREENSHOTMONITOR }, ...properties);
}

/**
 * Creates a screenshot monitor icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenshotMonitorIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenshotMonitorIcon(element, ...properties);
    return element;
}
