import { initIcon } from "./icon.js";

//the url of the four k plus svg; resolved relative to this module
const URL_FOURKPLUS = new URL('../../assets/icons/fourKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOURKPLUS }, ...properties);
}

/**
 * Creates a four k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initFourKPlusIcon(element, ...properties);
    return element;
}
