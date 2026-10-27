import { initIcon } from "./icon.js";

//the url of the hdr enhanced select outlined svg; resolved relative to this module
const URL_HDRENHANCEDSELECTOUTLINED = new URL('../../assets/icons/hdrEnhancedSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr enhanced select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrEnhancedSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrEnhancedSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrEnhancedSelectOutlinedIcon', url: URL_HDRENHANCEDSELECTOUTLINED }, ...properties);
}

/**
 * Creates a hdr enhanced select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrEnhancedSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrEnhancedSelectOutlinedIcon(element, ...properties);
    return element;
}
