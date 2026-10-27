import { initIcon } from "./icon.js";

//the url of the difference svg; resolved relative to this module
const URL_DIFFERENCE = new URL('../../assets/icons/difference.svg', import.meta.url).href;

/**
 * Initializes an icon element as a difference icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/difference.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDifferenceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'differenceIcon', url: URL_DIFFERENCE }, ...properties);
}

/**
 * Creates a difference icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const differenceIcon = (...properties) => {
    const element = document.createElement('div');
    initDifferenceIcon(element, ...properties);
    return element;
}
