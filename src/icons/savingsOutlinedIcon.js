import { initIcon } from "./icon.js";

//the url of the savings outlined svg; resolved relative to this module
const URL_SAVINGSOUTLINED = new URL('../../assets/icons/savingsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a savings outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/savingsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSavingsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAVINGSOUTLINED }, ...properties);
}

/**
 * Creates a savings outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const savingsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSavingsOutlinedIcon(element, ...properties);
    return element;
}
