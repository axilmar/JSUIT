import { initIcon } from "./icon.js";

//the url of the border right svg; resolved relative to this module
const URL_BORDERRIGHT = new URL('../../assets/icons/borderRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'borderRightIcon', url: URL_BORDERRIGHT }, ...properties);
}

/**
 * Creates a border right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderRightIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderRightIcon(element, ...properties);
    return element;
}
