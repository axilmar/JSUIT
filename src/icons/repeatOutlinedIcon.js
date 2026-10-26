import { initIcon } from "./icon.js";

//the url of the repeat outlined svg; resolved relative to this module
const URL_REPEATOUTLINED = new URL('../../assets/icons/repeatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPEATOUTLINED }, ...properties);
}

/**
 * Creates a repeat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatOutlinedIcon(element, ...properties);
    return element;
}
