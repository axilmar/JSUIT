import { initIcon } from "./icon.js";

//the url of the crop169 svg; resolved relative to this module
const URL_CROP169 = new URL('../../assets/icons/crop169.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop169 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop169.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop169Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'crop169Icon', url: URL_CROP169 }, ...properties);
}

/**
 * Creates a crop169 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop169Icon = (...properties) => {
    const element = document.createElement('div');
    initCrop169Icon(element, ...properties);
    return element;
}
