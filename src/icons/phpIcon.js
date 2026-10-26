import { initIcon } from "./icon.js";

//the url of the php svg; resolved relative to this module
const URL_PHP = new URL('../../assets/icons/php.svg', import.meta.url).href;

/**
 * Initializes an icon element as a php icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/php.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHP }, ...properties);
}

/**
 * Creates a php icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phpIcon = (...properties) => {
    const element = document.createElement('div');
    initPhpIcon(element, ...properties);
    return element;
}
