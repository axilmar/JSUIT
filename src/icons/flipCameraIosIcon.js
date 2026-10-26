import { initIcon } from "./icon.js";

//the url of the flip camera ios svg; resolved relative to this module
const URL_FLIPCAMERAIOS = new URL('../../assets/icons/flipCameraIos.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip camera ios icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipCameraIos.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipCameraIosIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLIPCAMERAIOS }, ...properties);
}

/**
 * Creates a flip camera ios icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipCameraIosIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipCameraIosIcon(element, ...properties);
    return element;
}
