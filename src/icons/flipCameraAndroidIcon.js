import { initIcon } from "./icon.js";

//the url of the flip camera android svg; resolved relative to this module
const URL_FLIPCAMERAANDROID = new URL('../../assets/icons/flipCameraAndroid.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip camera android icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipCameraAndroid.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipCameraAndroidIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLIPCAMERAANDROID }, ...properties);
}

/**
 * Creates a flip camera android icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipCameraAndroidIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipCameraAndroidIcon(element, ...properties);
    return element;
}
