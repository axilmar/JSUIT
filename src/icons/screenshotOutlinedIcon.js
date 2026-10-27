import { initIcon } from "./icon.js";

//the url of the screenshot outlined svg; resolved relative to this module
const URL_SCREENSHOTOUTLINED = new URL('../../assets/icons/screenshotOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screenshot outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenshotOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenshotOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'screenshotOutlinedIcon', url: URL_SCREENSHOTOUTLINED }, ...properties);
}

/**
 * Creates a screenshot outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenshotOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenshotOutlinedIcon(element, ...properties);
    return element;
}
