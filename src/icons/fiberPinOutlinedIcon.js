import { initIcon } from "./icon.js";

//the url of the fiber pin outlined svg; resolved relative to this module
const URL_FIBERPINOUTLINED = new URL('../../assets/icons/fiberPinOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber pin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberPinOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberPinOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fiberPinOutlinedIcon', url: URL_FIBERPINOUTLINED }, ...properties);
}

/**
 * Creates a fiber pin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberPinOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberPinOutlinedIcon(element, ...properties);
    return element;
}
