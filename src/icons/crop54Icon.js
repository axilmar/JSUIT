import { initIcon } from "./icon.js";

//the url of the crop54 svg; resolved relative to this module
const URL_CROP54 = new URL('../../assets/icons/crop54.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop54 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop54.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop54Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'crop54Icon', url: URL_CROP54 }, ...properties);
}

/**
 * Creates a crop54 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop54Icon = (...properties) => {
    const element = document.createElement('div');
    initCrop54Icon(element, ...properties);
    return element;
}
