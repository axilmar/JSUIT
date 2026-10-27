import { initIcon } from "./icon.js";

//the url of the electrical services svg; resolved relative to this module
const URL_ELECTRICALSERVICES = new URL('../../assets/icons/electricalServices.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electrical services icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricalServices.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricalServicesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricalServicesIcon', url: URL_ELECTRICALSERVICES }, ...properties);
}

/**
 * Creates an electrical services icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricalServicesIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricalServicesIcon(element, ...properties);
    return element;
}
