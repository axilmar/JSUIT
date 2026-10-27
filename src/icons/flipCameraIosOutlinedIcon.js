import { initIcon } from "./icon.js";

//the url of the flip camera ios outlined svg; resolved relative to this module
const URL_FLIPCAMERAIOSOUTLINED = new URL('../../assets/icons/flipCameraIosOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip camera ios outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipCameraIosOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipCameraIosOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flipCameraIosOutlinedIcon', url: URL_FLIPCAMERAIOSOUTLINED }, ...properties);
}

/**
 * Creates a flip camera ios outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipCameraIosOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipCameraIosOutlinedIcon(element, ...properties);
    return element;
}
