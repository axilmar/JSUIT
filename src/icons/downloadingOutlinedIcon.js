import { initIcon } from "./icon.js";

//the url of the downloading outlined svg; resolved relative to this module
const URL_DOWNLOADINGOUTLINED = new URL('../../assets/icons/downloadingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a downloading outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/downloadingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDownloadingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOWNLOADINGOUTLINED }, ...properties);
}

/**
 * Creates a downloading outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const downloadingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDownloadingOutlinedIcon(element, ...properties);
    return element;
}
