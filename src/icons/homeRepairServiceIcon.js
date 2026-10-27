import { initIcon } from "./icon.js";

//the url of the home repair service svg; resolved relative to this module
const URL_HOMEREPAIRSERVICE = new URL('../../assets/icons/homeRepairService.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home repair service icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeRepairService.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeRepairServiceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'homeRepairServiceIcon', url: URL_HOMEREPAIRSERVICE }, ...properties);
}

/**
 * Creates a home repair service icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeRepairServiceIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeRepairServiceIcon(element, ...properties);
    return element;
}
