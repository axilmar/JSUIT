import { initIcon } from "./icon.js";

//the url of the hdr on select svg; resolved relative to this module
const URL_HDRONSELECT = new URL('../../assets/icons/hdrOnSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr on select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOnSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOnSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDRONSELECT }, ...properties);
}

/**
 * Creates a hdr on select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOnSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOnSelectIcon(element, ...properties);
    return element;
}
