import { initIcon } from "./icon.js";

//the url of the hdr off select outlined svg; resolved relative to this module
const URL_HDROFFSELECTOUTLINED = new URL('../../assets/icons/hdrOffSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr off select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrOffSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrOffSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrOffSelectOutlinedIcon', url: URL_HDROFFSELECTOUTLINED }, ...properties);
}

/**
 * Creates a hdr off select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrOffSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrOffSelectOutlinedIcon(element, ...properties);
    return element;
}
