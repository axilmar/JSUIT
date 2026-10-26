import { initIcon } from "./icon.js";

//the url of the no cell svg; resolved relative to this module
const URL_NOCELL = new URL('../../assets/icons/noCell.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no cell icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noCell.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoCellIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOCELL }, ...properties);
}

/**
 * Creates a no cell icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noCellIcon = (...properties) => {
    const element = document.createElement('div');
    initNoCellIcon(element, ...properties);
    return element;
}
