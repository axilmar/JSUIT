import { initIcon } from "./icon.js";

//the url of the send and archive outlined svg; resolved relative to this module
const URL_SENDANDARCHIVEOUTLINED = new URL('../../assets/icons/sendAndArchiveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a send and archive outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sendAndArchiveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSendAndArchiveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sendAndArchiveOutlinedIcon', url: URL_SENDANDARCHIVEOUTLINED }, ...properties);
}

/**
 * Creates a send and archive outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sendAndArchiveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSendAndArchiveOutlinedIcon(element, ...properties);
    return element;
}
