import { initIcon } from "./icon.js";

//the url of the lock reset svg; resolved relative to this module
const URL_LOCKRESET = new URL('../../assets/icons/lockReset.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock reset icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lockReset.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockResetIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCKRESET }, ...properties);
}

/**
 * Creates a lock reset icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockResetIcon = (...properties) => {
    const element = document.createElement('div');
    initLockResetIcon(element, ...properties);
    return element;
}
