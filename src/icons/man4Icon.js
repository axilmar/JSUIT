import { initIcon } from "./icon.js";

//the url of the man4 svg; resolved relative to this module
const URL_MAN4 = new URL('../../assets/icons/man4.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man4 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/man4.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMan4Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'man4Icon', url: URL_MAN4 }, ...properties);
}

/**
 * Creates a man4 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const man4Icon = (...properties) => {
    const element = document.createElement('div');
    initMan4Icon(element, ...properties);
    return element;
}
