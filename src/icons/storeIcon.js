import { initIcon } from "./icon.js";

//the url of the store svg; resolved relative to this module
const URL_STORE = new URL('../../assets/icons/store.svg', import.meta.url).href;

/**
 * Initializes an icon element as a store icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/store.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STORE }, ...properties);
}

/**
 * Creates a store icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storeIcon = (...properties) => {
    const element = document.createElement('div');
    initStoreIcon(element, ...properties);
    return element;
}
