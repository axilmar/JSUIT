import { initIcon } from "./icon.js";

//the url of the crop32 outlined svg; resolved relative to this module
const URL_CROP32OUTLINED = new URL('../../assets/icons/crop32Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop32 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop32Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop32OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'crop32OutlinedIcon', url: URL_CROP32OUTLINED }, ...properties);
}

/**
 * Creates a crop32 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop32OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCrop32OutlinedIcon(element, ...properties);
    return element;
}
