import { initIcon } from "./icon.js";

//the url of the segment svg; resolved relative to this module
const URL_SEGMENT = new URL('../../assets/icons/segment.svg', import.meta.url).href;

/**
 * Initializes an icon element as a segment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/segment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSegmentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'segmentIcon', url: URL_SEGMENT }, ...properties);
}

/**
 * Creates a segment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const segmentIcon = (...properties) => {
    const element = document.createElement('div');
    initSegmentIcon(element, ...properties);
    return element;
}
