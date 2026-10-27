import { initIcon } from "./icon.js";

//the url of the design services svg; resolved relative to this module
const URL_DESIGNSERVICES = new URL('../../assets/icons/designServices.svg', import.meta.url).href;

/**
 * Initializes an icon element as a design services icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/designServices.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesignServicesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'designServicesIcon', url: URL_DESIGNSERVICES }, ...properties);
}

/**
 * Creates a design services icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const designServicesIcon = (...properties) => {
    const element = document.createElement('div');
    initDesignServicesIcon(element, ...properties);
    return element;
}
