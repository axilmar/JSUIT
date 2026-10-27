import { initIcon } from "./icon.js";

//the url of the thirty fps svg; resolved relative to this module
const URL_THIRTYFPS = new URL('../../assets/icons/thirtyFps.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thirty fps icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thirtyFps.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThirtyFpsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thirtyFpsIcon', url: URL_THIRTYFPS }, ...properties);
}

/**
 * Creates a thirty fps icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thirtyFpsIcon = (...properties) => {
    const element = document.createElement('div');
    initThirtyFpsIcon(element, ...properties);
    return element;
}
