import { initIcon } from "./icon.js";

//the url of the sync svg; resolved relative to this module
const URL_SYNC = new URL('../../assets/icons/sync.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sync.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYNC }, ...properties);
}

/**
 * Creates a sync icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncIcon(element, ...properties);
    return element;
}
