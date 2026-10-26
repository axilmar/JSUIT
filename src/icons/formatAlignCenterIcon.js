import { initIcon } from "./icon.js";

//the url of the format align center svg; resolved relative to this module
const URL_FORMATALIGNCENTER = new URL('../../assets/icons/formatAlignCenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format align center icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatAlignCenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatAlignCenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATALIGNCENTER }, ...properties);
}

/**
 * Creates a format align center icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatAlignCenterIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatAlignCenterIcon(element, ...properties);
    return element;
}
