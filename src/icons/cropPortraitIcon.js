import { initIcon } from "./icon.js";

//the url of the crop portrait svg; resolved relative to this module
const URL_CROPPORTRAIT = new URL('../../assets/icons/cropPortrait.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop portrait icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropPortrait.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropPortraitIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPPORTRAIT }, ...properties);
}

/**
 * Creates a crop portrait icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropPortraitIcon = (...properties) => {
    const element = document.createElement('div');
    initCropPortraitIcon(element, ...properties);
    return element;
}
