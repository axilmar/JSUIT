import { initIcon } from "./icon.js";

//the url of the delivery dining outlined svg; resolved relative to this module
const URL_DELIVERYDININGOUTLINED = new URL('../../assets/icons/deliveryDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a delivery dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deliveryDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeliveryDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DELIVERYDININGOUTLINED }, ...properties);
}

/**
 * Creates a delivery dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deliveryDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeliveryDiningOutlinedIcon(element, ...properties);
    return element;
}
