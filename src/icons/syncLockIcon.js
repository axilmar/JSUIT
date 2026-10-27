import { initIcon } from "./icon.js";

//the url of the sync lock svg; resolved relative to this module
const URL_SYNCLOCK = new URL('../../assets/icons/syncLock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncLock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'syncLockIcon', url: URL_SYNCLOCK }, ...properties);
}

/**
 * Creates a sync lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncLockIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncLockIcon(element, ...properties);
    return element;
}
