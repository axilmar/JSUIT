import { initIcon } from "./icon.js";

//the url of the crop32 svg; resolved relative to this module
const URL_CROP32 = new URL('../../assets/icons/crop32.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop32 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop32.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop32Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'crop32Icon', url: URL_CROP32 }, ...properties);
}

/**
 * Creates a crop32 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop32Icon = (...properties) => {
    const element = document.createElement('div');
    initCrop32Icon(element, ...properties);
    return element;
}
