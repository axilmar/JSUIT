import { initIcon } from "./icon.js";

//the url of the touch app svg; resolved relative to this module
const URL_TOUCHAPP = new URL('../../assets/icons/touchApp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a touch app icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/touchApp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTouchAppIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'touchAppIcon', url: URL_TOUCHAPP }, ...properties);
}

/**
 * Creates a touch app icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const touchAppIcon = (...properties) => {
    const element = document.createElement('div');
    initTouchAppIcon(element, ...properties);
    return element;
}
