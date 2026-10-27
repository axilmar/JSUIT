import { initIcon } from "./icon.js";

//the url of the tab unselected svg; resolved relative to this module
const URL_TABUNSELECTED = new URL('../../assets/icons/tabUnselected.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tab unselected icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tabUnselected.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabUnselectedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tabUnselectedIcon', url: URL_TABUNSELECTED }, ...properties);
}

/**
 * Creates a tab unselected icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabUnselectedIcon = (...properties) => {
    const element = document.createElement('div');
    initTabUnselectedIcon(element, ...properties);
    return element;
}
