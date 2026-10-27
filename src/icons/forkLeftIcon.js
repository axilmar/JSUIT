import { initIcon } from "./icon.js";

//the url of the fork left svg; resolved relative to this module
const URL_FORKLEFT = new URL('../../assets/icons/forkLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fork left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forkLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForkLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forkLeftIcon', url: URL_FORKLEFT }, ...properties);
}

/**
 * Creates a fork left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forkLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initForkLeftIcon(element, ...properties);
    return element;
}
