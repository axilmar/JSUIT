import { initIcon } from "./icon.js";

//the url of the blur linear outlined svg; resolved relative to this module
const URL_BLURLINEAROUTLINED = new URL('../../assets/icons/blurLinearOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blur linear outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blurLinearOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlurLinearOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BLURLINEAROUTLINED }, ...properties);
}

/**
 * Creates a blur linear outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blurLinearOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlurLinearOutlinedIcon(element, ...properties);
    return element;
}
