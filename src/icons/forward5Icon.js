import { initIcon } from "./icon.js";

//the url of the forward5 svg; resolved relative to this module
const URL_FORWARD5 = new URL('../../assets/icons/forward5.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward5 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forward5.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForward5Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forward5Icon', url: URL_FORWARD5 }, ...properties);
}

/**
 * Creates a forward5 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forward5Icon = (...properties) => {
    const element = document.createElement('div');
    initForward5Icon(element, ...properties);
    return element;
}
