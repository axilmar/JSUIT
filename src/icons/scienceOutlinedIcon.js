import { initIcon } from "./icon.js";

//the url of the science outlined svg; resolved relative to this module
const URL_SCIENCEOUTLINED = new URL('../../assets/icons/scienceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a science outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scienceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScienceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'scienceOutlinedIcon', url: URL_SCIENCEOUTLINED }, ...properties);
}

/**
 * Creates a science outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scienceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScienceOutlinedIcon(element, ...properties);
    return element;
}
