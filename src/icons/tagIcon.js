import { initIcon } from "./icon.js";

//the url of the tag svg; resolved relative to this module
const URL_TAG = new URL('../../assets/icons/tag.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tag icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tag.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTagIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TAG }, ...properties);
}

/**
 * Creates a tag icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tagIcon = (...properties) => {
    const element = document.createElement('div');
    initTagIcon(element, ...properties);
    return element;
}
