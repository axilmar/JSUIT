import { initIcon } from "./icon.js";

//the url of the loop svg; resolved relative to this module
const URL_LOOP = new URL('../../assets/icons/loop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a loop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/loop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLoopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'loopIcon', url: URL_LOOP }, ...properties);
}

/**
 * Creates a loop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const loopIcon = (...properties) => {
    const element = document.createElement('div');
    initLoopIcon(element, ...properties);
    return element;
}
