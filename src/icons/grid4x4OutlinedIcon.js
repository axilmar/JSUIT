import { initIcon } from "./icon.js";

//the url of the grid4x4 outlined svg; resolved relative to this module
const URL_GRID4X4OUTLINED = new URL('../../assets/icons/grid4x4Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid4x4 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grid4x4Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGrid4x4OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRID4X4OUTLINED }, ...properties);
}

/**
 * Creates a grid4x4 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const grid4x4OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGrid4x4OutlinedIcon(element, ...properties);
    return element;
}
