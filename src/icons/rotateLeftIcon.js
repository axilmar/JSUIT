import { initIcon } from "./icon.js";

//the url of the rotate left svg; resolved relative to this module
const URL_ROTATELEFT = new URL('../../assets/icons/rotateLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotateLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotateLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rotateLeftIcon', url: URL_ROTATELEFT }, ...properties);
}

/**
 * Creates a rotate left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotateLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initRotateLeftIcon(element, ...properties);
    return element;
}
