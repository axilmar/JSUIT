import { initIcon } from "./icon.js";

//the url of the dirty lens svg; resolved relative to this module
const URL_DIRTYLENS = new URL('../../assets/icons/dirtyLens.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dirty lens icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dirtyLens.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirtyLensIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRTYLENS }, ...properties);
}

/**
 * Creates a dirty lens icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dirtyLensIcon = (...properties) => {
    const element = document.createElement('div');
    initDirtyLensIcon(element, ...properties);
    return element;
}
