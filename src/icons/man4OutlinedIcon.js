import { initIcon } from "./icon.js";

//the url of the man4 outlined svg; resolved relative to this module
const URL_MAN4OUTLINED = new URL('../../assets/icons/man4Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a man4 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/man4Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMan4OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'man4OutlinedIcon', url: URL_MAN4OUTLINED }, ...properties);
}

/**
 * Creates a man4 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const man4OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMan4OutlinedIcon(element, ...properties);
    return element;
}
