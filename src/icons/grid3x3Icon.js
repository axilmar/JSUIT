import { initIcon } from "./icon.js";

//the url of the grid3x3 svg; resolved relative to this module
const URL_GRID3X3 = new URL('../../assets/icons/grid3x3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid3x3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grid3x3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGrid3x3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRID3X3 }, ...properties);
}

/**
 * Creates a grid3x3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const grid3x3Icon = (...properties) => {
    const element = document.createElement('div');
    initGrid3x3Icon(element, ...properties);
    return element;
}
