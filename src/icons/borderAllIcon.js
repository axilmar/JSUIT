import { initIcon } from "./icon.js";

//the url of the border all svg; resolved relative to this module
const URL_BORDERALL = new URL('../../assets/icons/borderAll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border all icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderAll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderAllIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERALL }, ...properties);
}

/**
 * Creates a border all icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderAllIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderAllIcon(element, ...properties);
    return element;
}
