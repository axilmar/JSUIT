import { initIcon } from "./icon.js";

//the url of the stroller outlined svg; resolved relative to this module
const URL_STROLLEROUTLINED = new URL('../../assets/icons/strollerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stroller outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/strollerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStrollerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'strollerOutlinedIcon', url: URL_STROLLEROUTLINED }, ...properties);
}

/**
 * Creates a stroller outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const strollerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStrollerOutlinedIcon(element, ...properties);
    return element;
}
