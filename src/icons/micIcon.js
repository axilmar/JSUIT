import { initIcon } from "./icon.js";

//the url of the mic svg; resolved relative to this module
const URL_MIC = new URL('../../assets/icons/mic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'micIcon', url: URL_MIC }, ...properties);
}

/**
 * Creates a mic icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micIcon = (...properties) => {
    const element = document.createElement('div');
    initMicIcon(element, ...properties);
    return element;
}
