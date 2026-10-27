import { initIcon } from "./icon.js";

//the url of the add svg; resolved relative to this module
const URL_ADD = new URL('../../assets/icons/add.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/add.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addIcon', url: URL_ADD }, ...properties);
}

/**
 * Creates an add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addIcon = (...properties) => {
    const element = document.createElement('div');
    initAddIcon(element, ...properties);
    return element;
}
