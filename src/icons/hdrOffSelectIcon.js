import { initIcon } from "./icon.js";

//the url of the hdr off select svg; resolved relative to this module
const URL_HDROFFSELECT = new URL('../../assets/icons/hdrOffSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr off select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOffSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOffSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDROFFSELECT }, ...properties);
}

/**
 * Creates a hdr off select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOffSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOffSelectIcon(element, ...properties);
    return element;
}
