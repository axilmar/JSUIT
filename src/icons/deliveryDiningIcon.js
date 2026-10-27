import { initIcon } from "./icon.js";

//the url of the delivery dining svg; resolved relative to this module
const URL_DELIVERYDINING = new URL('../../assets/icons/deliveryDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delivery dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deliveryDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeliveryDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'deliveryDiningIcon', url: URL_DELIVERYDINING }, ...properties);
}

/**
 * Creates a delivery dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deliveryDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initDeliveryDiningIcon(element, ...properties);
    return element;
}
