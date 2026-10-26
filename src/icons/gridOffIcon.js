import { initIcon } from "./icon.js";

//the url of the grid off svg; resolved relative to this module
const URL_GRIDOFF = new URL('../../assets/icons/gridOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRIDOFF }, ...properties);
}

/**
 * Creates a grid off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridOffIcon = (...properties) => {
    const element = document.createElement('div');
    initGridOffIcon(element, ...properties);
    return element;
}
