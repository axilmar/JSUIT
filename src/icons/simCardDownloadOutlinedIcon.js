import { initIcon } from "./icon.js";

//the url of the sim card download outlined svg; resolved relative to this module
const URL_SIMCARDDOWNLOADOUTLINED = new URL('../../assets/icons/simCardDownloadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sim card download outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/simCardDownloadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSimCardDownloadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'simCardDownloadOutlinedIcon', url: URL_SIMCARDDOWNLOADOUTLINED }, ...properties);
}

/**
 * Creates a sim card download outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const simCardDownloadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSimCardDownloadOutlinedIcon(element, ...properties);
    return element;
}
