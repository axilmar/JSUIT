import { initIcon } from "./icon.js";

//the url of the crop75 svg; resolved relative to this module
const URL_CROP75 = new URL('../../assets/icons/crop75.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop75 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop75.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop75Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'crop75Icon', url: URL_CROP75 }, ...properties);
}

/**
 * Creates a crop75 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop75Icon = (...properties) => {
    const element = document.createElement('div');
    initCrop75Icon(element, ...properties);
    return element;
}
