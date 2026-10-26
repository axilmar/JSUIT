import { initIcon } from "./icon.js";

//the url of the grid view outlined svg; resolved relative to this module
const URL_GRIDVIEWOUTLINED = new URL('../../assets/icons/gridViewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid view outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridViewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridViewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRIDVIEWOUTLINED }, ...properties);
}

/**
 * Creates a grid view outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridViewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGridViewOutlinedIcon(element, ...properties);
    return element;
}
