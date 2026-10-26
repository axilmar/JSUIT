import { initIcon } from "./icon.js";

//the url of the crop rotate outlined svg; resolved relative to this module
const URL_CROPROTATEOUTLINED = new URL('../../assets/icons/cropRotateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop rotate outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropRotateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropRotateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPROTATEOUTLINED }, ...properties);
}

/**
 * Creates a crop rotate outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropRotateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropRotateOutlinedIcon(element, ...properties);
    return element;
}
