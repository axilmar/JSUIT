import { initIcon } from "./icon.js";

//the url of the plus one outlined svg; resolved relative to this module
const URL_PLUSONEOUTLINED = new URL('../../assets/icons/plusOneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a plus one outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/plusOneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlusOneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'plusOneOutlinedIcon', url: URL_PLUSONEOUTLINED }, ...properties);
}

/**
 * Creates a plus one outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const plusOneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlusOneOutlinedIcon(element, ...properties);
    return element;
}
