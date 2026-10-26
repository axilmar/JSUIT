import { initIcon } from "./icon.js";

//the url of the local laundry service svg; resolved relative to this module
const URL_LOCALLAUNDRYSERVICE = new URL('../../assets/icons/localLaundryService.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local laundry service icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localLaundryService.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalLaundryServiceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALLAUNDRYSERVICE }, ...properties);
}

/**
 * Creates a local laundry service icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localLaundryServiceIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalLaundryServiceIcon(element, ...properties);
    return element;
}
