import { initIcon } from "./icon.js";

//the url of the crop din outlined svg; resolved relative to this module
const URL_CROPDINOUTLINED = new URL('../../assets/icons/cropDinOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop din outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropDinOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropDinOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cropDinOutlinedIcon', url: URL_CROPDINOUTLINED }, ...properties);
}

/**
 * Creates a crop din outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropDinOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropDinOutlinedIcon(element, ...properties);
    return element;
}
