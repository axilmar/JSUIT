import { initIcon } from "./icon.js";

//the url of the border style svg; resolved relative to this module
const URL_BORDERSTYLE = new URL('../../assets/icons/borderStyle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border style icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderStyle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderStyleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderStyleIcon', url: URL_BORDERSTYLE }, ...properties);
}

/**
 * Creates a border style icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderStyleIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderStyleIcon(element, ...properties);
    return element;
}
