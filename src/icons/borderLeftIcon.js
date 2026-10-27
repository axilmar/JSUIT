import { initIcon } from "./icon.js";

//the url of the border left svg; resolved relative to this module
const URL_BORDERLEFT = new URL('../../assets/icons/borderLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderLeftIcon', url: URL_BORDERLEFT }, ...properties);
}

/**
 * Creates a border left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderLeftIcon(element, ...properties);
    return element;
}
