import { initIcon } from "./icon.js";

//the url of the toggle off outlined svg; resolved relative to this module
const URL_TOGGLEOFFOUTLINED = new URL('../../assets/icons/toggleOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toggle off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toggleOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToggleOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TOGGLEOFFOUTLINED }, ...properties);
}

/**
 * Creates a toggle off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toggleOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initToggleOffOutlinedIcon(element, ...properties);
    return element;
}
