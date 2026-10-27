import { initIcon } from "./icon.js";

//the url of the mouse svg; resolved relative to this module
const URL_MOUSE = new URL('../../assets/icons/mouse.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mouse icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mouse.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMouseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mouseIcon', url: URL_MOUSE }, ...properties);
}

/**
 * Creates a mouse icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mouseIcon = (...properties) => {
    const element = document.createElement('div');
    initMouseIcon(element, ...properties);
    return element;
}
