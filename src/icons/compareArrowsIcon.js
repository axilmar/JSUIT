import { initIcon } from "./icon.js";

//the url of the compare arrows svg; resolved relative to this module
const URL_COMPAREARROWS = new URL('../../assets/icons/compareArrows.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compare arrows icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compareArrows.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompareArrowsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMPAREARROWS }, ...properties);
}

/**
 * Creates a compare arrows icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compareArrowsIcon = (...properties) => {
    const element = document.createElement('div');
    initCompareArrowsIcon(element, ...properties);
    return element;
}
