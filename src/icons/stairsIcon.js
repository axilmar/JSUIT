import { initIcon } from "./icon.js";

//the url of the stairs svg; resolved relative to this module
const URL_STAIRS = new URL('../../assets/icons/stairs.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stairs icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stairs.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStairsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'stairsIcon', url: URL_STAIRS }, ...properties);
}

/**
 * Creates a stairs icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stairsIcon = (...properties) => {
    const element = document.createElement('div');
    initStairsIcon(element, ...properties);
    return element;
}
