import { initIcon } from "./icon.js";

//the url of the hdr plus outlined svg; resolved relative to this module
const URL_HDRPLUSOUTLINED = new URL('../../assets/icons/hdrPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrPlusOutlinedIcon', url: URL_HDRPLUSOUTLINED }, ...properties);
}

/**
 * Creates a hdr plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrPlusOutlinedIcon(element, ...properties);
    return element;
}
