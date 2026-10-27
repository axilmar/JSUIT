import { initIcon } from "./icon.js";

//the url of the forward10 svg; resolved relative to this module
const URL_FORWARD10 = new URL('../../assets/icons/forward10.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward10 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forward10.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForward10Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forward10Icon', url: URL_FORWARD10 }, ...properties);
}

/**
 * Creates a forward10 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forward10Icon = (...properties) => {
    const element = document.createElement('div');
    initForward10Icon(element, ...properties);
    return element;
}
