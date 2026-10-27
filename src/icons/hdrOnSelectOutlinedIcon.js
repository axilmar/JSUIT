import { initIcon } from "./icon.js";

//the url of the hdr on select outlined svg; resolved relative to this module
const URL_HDRONSELECTOUTLINED = new URL('../../assets/icons/hdrOnSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr on select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOnSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOnSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrOnSelectOutlinedIcon', url: URL_HDRONSELECTOUTLINED }, ...properties);
}

/**
 * Creates a hdr on select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOnSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOnSelectOutlinedIcon(element, ...properties);
    return element;
}
