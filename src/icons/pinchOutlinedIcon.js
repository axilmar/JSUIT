import { initIcon } from "./icon.js";

//the url of the pinch outlined svg; resolved relative to this module
const URL_PINCHOUTLINED = new URL('../../assets/icons/pinchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pinch outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pinchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPinchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pinchOutlinedIcon', url: URL_PINCHOUTLINED }, ...properties);
}

/**
 * Creates a pinch outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pinchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPinchOutlinedIcon(element, ...properties);
    return element;
}
