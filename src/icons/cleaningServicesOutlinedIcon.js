import { initIcon } from "./icon.js";

//the url of the cleaning services outlined svg; resolved relative to this module
const URL_CLEANINGSERVICESOUTLINED = new URL('../../assets/icons/cleaningServicesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cleaning services outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cleaningServicesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCleaningServicesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cleaningServicesOutlinedIcon', url: URL_CLEANINGSERVICESOUTLINED }, ...properties);
}

/**
 * Creates a cleaning services outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cleaningServicesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCleaningServicesOutlinedIcon(element, ...properties);
    return element;
}
