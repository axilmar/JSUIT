import { initIcon } from "./icon.js";

//the url of the hdr enhanced select svg; resolved relative to this module
const URL_HDRENHANCEDSELECT = new URL('../../assets/icons/hdrEnhancedSelect.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr enhanced select icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrEnhancedSelect.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrEnhancedSelectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HDRENHANCEDSELECT }, ...properties);
}

/**
 * Creates a hdr enhanced select icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrEnhancedSelectIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrEnhancedSelectIcon(element, ...properties);
    return element;
}
