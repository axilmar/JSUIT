import { initIcon } from "./icon.js";

//the url of the repeat one outlined svg; resolved relative to this module
const URL_REPEATONEOUTLINED = new URL('../../assets/icons/repeatOneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a repeat one outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/repeatOneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRepeatOneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REPEATONEOUTLINED }, ...properties);
}

/**
 * Creates a repeat one outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const repeatOneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRepeatOneOutlinedIcon(element, ...properties);
    return element;
}
