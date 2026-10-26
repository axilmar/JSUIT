import { initIcon } from "./icon.js";

//the url of the plumbing svg; resolved relative to this module
const URL_PLUMBING = new URL('../../assets/icons/plumbing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a plumbing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/plumbing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlumbingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLUMBING }, ...properties);
}

/**
 * Creates a plumbing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const plumbingIcon = (...properties) => {
    const element = document.createElement('div');
    initPlumbingIcon(element, ...properties);
    return element;
}
