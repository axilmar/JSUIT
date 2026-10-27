import { initIcon } from "./icon.js";

//the url of the wheelchair pickup svg; resolved relative to this module
const URL_WHEELCHAIRPICKUP = new URL('../../assets/icons/wheelchairPickup.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wheelchair pickup icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wheelchairPickup.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWheelchairPickupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wheelchairPickupIcon', url: URL_WHEELCHAIRPICKUP }, ...properties);
}

/**
 * Creates a wheelchair pickup icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wheelchairPickupIcon = (...properties) => {
    const element = document.createElement('div');
    initWheelchairPickupIcon(element, ...properties);
    return element;
}
