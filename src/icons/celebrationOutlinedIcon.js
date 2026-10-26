import { initIcon } from "./icon.js";

//the url of the celebration outlined svg; resolved relative to this module
const URL_CELEBRATIONOUTLINED = new URL('../../assets/icons/celebrationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a celebration outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/celebrationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCelebrationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CELEBRATIONOUTLINED }, ...properties);
}

/**
 * Creates a celebration outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const celebrationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCelebrationOutlinedIcon(element, ...properties);
    return element;
}
