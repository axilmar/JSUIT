import { initIcon } from "./icon.js";

//the url of the flip camera android outlined svg; resolved relative to this module
const URL_FLIPCAMERAANDROIDOUTLINED = new URL('../../assets/icons/flipCameraAndroidOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip camera android outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipCameraAndroidOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipCameraAndroidOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flipCameraAndroidOutlinedIcon', url: URL_FLIPCAMERAANDROIDOUTLINED }, ...properties);
}

/**
 * Creates a flip camera android outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipCameraAndroidOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipCameraAndroidOutlinedIcon(element, ...properties);
    return element;
}
