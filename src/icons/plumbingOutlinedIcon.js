import { initIcon } from "./icon.js";

//the url of the plumbing outlined svg; resolved relative to this module
const URL_PLUMBINGOUTLINED = new URL('../../assets/icons/plumbingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a plumbing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/plumbingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlumbingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLUMBINGOUTLINED }, ...properties);
}

/**
 * Creates a plumbing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const plumbingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlumbingOutlinedIcon(element, ...properties);
    return element;
}
