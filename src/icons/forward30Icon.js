import { initIcon } from "./icon.js";

//the url of the forward30 svg; resolved relative to this module
const URL_FORWARD30 = new URL('../../assets/icons/forward30.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward30 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forward30.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForward30Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forward30Icon', url: URL_FORWARD30 }, ...properties);
}

/**
 * Creates a forward30 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forward30Icon = (...properties) => {
    const element = document.createElement('div');
    initForward30Icon(element, ...properties);
    return element;
}
