import { initIcon } from "./icon.js";

//the url of the segment outlined svg; resolved relative to this module
const URL_SEGMENTOUTLINED = new URL('../../assets/icons/segmentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a segment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/segmentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSegmentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEGMENTOUTLINED }, ...properties);
}

/**
 * Creates a segment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const segmentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSegmentOutlinedIcon(element, ...properties);
    return element;
}
