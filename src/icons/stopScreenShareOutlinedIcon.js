import { initIcon } from "./icon.js";

//the url of the stop screen share outlined svg; resolved relative to this module
const URL_STOPSCREENSHAREOUTLINED = new URL('../../assets/icons/stopScreenShareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stop screen share outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stopScreenShareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStopScreenShareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stopScreenShareOutlinedIcon', url: URL_STOPSCREENSHAREOUTLINED }, ...properties);
}

/**
 * Creates a stop screen share outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stopScreenShareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStopScreenShareOutlinedIcon(element, ...properties);
    return element;
}
