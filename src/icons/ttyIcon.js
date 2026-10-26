import { initIcon } from "./icon.js";

//the url of the tty svg; resolved relative to this module
const URL_TTY = new URL('../../assets/icons/tty.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tty icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tty.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTtyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TTY }, ...properties);
}

/**
 * Creates a tty icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ttyIcon = (...properties) => {
    const element = document.createElement('div');
    initTtyIcon(element, ...properties);
    return element;
}
