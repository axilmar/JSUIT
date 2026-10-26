import { initIcon } from "./icon.js";

//the url of the cloud sync svg; resolved relative to this module
const URL_CLOUDSYNC = new URL('../../assets/icons/cloudSync.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cloud sync icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cloudSync.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloudSyncIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CLOUDSYNC }, ...properties);
}

/**
 * Creates a cloud sync icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cloudSyncIcon = (...properties) => {
    const element = document.createElement('div');
    initCloudSyncIcon(element, ...properties);
    return element;
}
