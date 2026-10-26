import { initIcon } from "./icon.js";

//the url of the lock svg; resolved relative to this module
const URL_LOCK = new URL('../../assets/icons/lock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCK }, ...properties);
}

/**
 * Creates a lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lockIcon = (...properties) => {
    const element = document.createElement('div');
    initLockIcon(element, ...properties);
    return element;
}
