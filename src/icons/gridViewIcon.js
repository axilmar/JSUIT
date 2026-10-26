import { initIcon } from "./icon.js";

//the url of the grid view svg; resolved relative to this module
const URL_GRIDVIEW = new URL('../../assets/icons/gridView.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid view icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridView.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridViewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRIDVIEW }, ...properties);
}

/**
 * Creates a grid view icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridViewIcon = (...properties) => {
    const element = document.createElement('div');
    initGridViewIcon(element, ...properties);
    return element;
}
