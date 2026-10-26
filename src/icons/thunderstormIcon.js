import { initIcon } from "./icon.js";

//the url of the thunderstorm svg; resolved relative to this module
const URL_THUNDERSTORM = new URL('../../assets/icons/thunderstorm.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thunderstorm icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thunderstorm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThunderstormIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUNDERSTORM }, ...properties);
}

/**
 * Creates a thunderstorm icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thunderstormIcon = (...properties) => {
    const element = document.createElement('div');
    initThunderstormIcon(element, ...properties);
    return element;
}
