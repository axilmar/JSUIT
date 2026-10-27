import { initIcon } from "./icon.js";

//the url of the cleaning services svg; resolved relative to this module
const URL_CLEANINGSERVICES = new URL('../../assets/icons/cleaningServices.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cleaning services icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cleaningServices.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCleaningServicesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cleaningServicesIcon', url: URL_CLEANINGSERVICES }, ...properties);
}

/**
 * Creates a cleaning services icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cleaningServicesIcon = (...properties) => {
    const element = document.createElement('div');
    initCleaningServicesIcon(element, ...properties);
    return element;
}
