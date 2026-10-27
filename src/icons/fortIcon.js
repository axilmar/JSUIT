import { initIcon } from "./icon.js";

//the url of the fort svg; resolved relative to this module
const URL_FORT = new URL('../../assets/icons/fort.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fort icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fort.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFortIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fortIcon', url: URL_FORT }, ...properties);
}

/**
 * Creates a fort icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fortIcon = (...properties) => {
    const element = document.createElement('div');
    initFortIcon(element, ...properties);
    return element;
}
