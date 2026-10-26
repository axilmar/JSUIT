import { initIcon } from "./icon.js";

//the url of the no stroller outlined svg; resolved relative to this module
const URL_NOSTROLLEROUTLINED = new URL('../../assets/icons/noStrollerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no stroller outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noStrollerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoStrollerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOSTROLLEROUTLINED }, ...properties);
}

/**
 * Creates a no stroller outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noStrollerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoStrollerOutlinedIcon(element, ...properties);
    return element;
}
