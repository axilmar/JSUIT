import { initIcon } from "./icon.js";

//the url of the commute outlined svg; resolved relative to this module
const URL_COMMUTEOUTLINED = new URL('../../assets/icons/commuteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a commute outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commuteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommuteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMMUTEOUTLINED }, ...properties);
}

/**
 * Creates a commute outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commuteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCommuteOutlinedIcon(element, ...properties);
    return element;
}
