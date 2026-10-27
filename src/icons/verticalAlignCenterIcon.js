import { initIcon } from "./icon.js";

//the url of the vertical align center svg; resolved relative to this module
const URL_VERTICALALIGNCENTER = new URL('../../assets/icons/verticalAlignCenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical align center icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalAlignCenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalAlignCenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verticalAlignCenterIcon', url: URL_VERTICALALIGNCENTER }, ...properties);
}

/**
 * Creates a vertical align center icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalAlignCenterIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalAlignCenterIcon(element, ...properties);
    return element;
}
