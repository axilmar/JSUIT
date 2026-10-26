import { initIcon } from "./icon.js";

//the url of the collections svg; resolved relative to this module
const URL_COLLECTIONS = new URL('../../assets/icons/collections.svg', import.meta.url).href;

/**
 * Initializes an icon element as a collections icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/collections.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCollectionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COLLECTIONS }, ...properties);
}

/**
 * Creates a collections icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const collectionsIcon = (...properties) => {
    const element = document.createElement('div');
    initCollectionsIcon(element, ...properties);
    return element;
}
