import { initIcon } from "./icon.js";

//the url of the repeat on outlined svg; resolved relative to this module
const URL_REPEATONOUTLINED = new URL('../../assets/icons/repeatOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeatOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPEATONOUTLINED }, ...properties);
}

/**
 * Creates a repeat on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatOnOutlinedIcon(element, ...properties);
    return element;
}
