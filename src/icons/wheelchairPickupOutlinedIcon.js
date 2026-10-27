import { initIcon } from "./icon.js";

//the url of the wheelchair pickup outlined svg; resolved relative to this module
const URL_WHEELCHAIRPICKUPOUTLINED = new URL('../../assets/icons/wheelchairPickupOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wheelchair pickup outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wheelchairPickupOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWheelchairPickupOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wheelchairPickupOutlinedIcon', url: URL_WHEELCHAIRPICKUPOUTLINED }, ...properties);
}

/**
 * Creates a wheelchair pickup outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wheelchairPickupOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWheelchairPickupOutlinedIcon(element, ...properties);
    return element;
}
