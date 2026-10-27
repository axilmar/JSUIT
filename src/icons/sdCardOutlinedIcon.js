import { initIcon } from "./icon.js";

//the url of the sd card outlined svg; resolved relative to this module
const URL_SDCARDOUTLINED = new URL('../../assets/icons/sdCardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd card outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sdCardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdCardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sdCardOutlinedIcon', url: URL_SDCARDOUTLINED }, ...properties);
}

/**
 * Creates a sd card outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdCardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSdCardOutlinedIcon(element, ...properties);
    return element;
}
