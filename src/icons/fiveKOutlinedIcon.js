import { initIcon } from "./icon.js";

//the url of the five k outlined svg; resolved relative to this module
const URL_FIVEKOUTLINED = new URL('../../assets/icons/fiveKOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a five k outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiveKOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiveKOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIVEKOUTLINED }, ...properties);
}

/**
 * Creates a five k outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiveKOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiveKOutlinedIcon(element, ...properties);
    return element;
}
