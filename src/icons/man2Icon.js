import { initIcon } from "./icon.js";

//the url of the man2 svg; resolved relative to this module
const URL_MAN2 = new URL('../../assets/icons/man2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/man2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMan2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'man2Icon', url: URL_MAN2 }, ...properties);
}

/**
 * Creates a man2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const man2Icon = (...properties) => {
    const element = document.createElement('div');
    initMan2Icon(element, ...properties);
    return element;
}
