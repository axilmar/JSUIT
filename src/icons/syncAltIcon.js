import { initIcon } from "./icon.js";

//the url of the sync alt svg; resolved relative to this module
const URL_SYNCALT = new URL('../../assets/icons/syncAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sync alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/syncAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSyncAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SYNCALT }, ...properties);
}

/**
 * Creates a sync alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const syncAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSyncAltIcon(element, ...properties);
    return element;
}
