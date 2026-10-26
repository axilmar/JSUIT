import { initIcon } from "./icon.js";

//the url of the backup table svg; resolved relative to this module
const URL_BACKUPTABLE = new URL('../../assets/icons/backupTable.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backup table icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backupTable.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackupTableIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BACKUPTABLE }, ...properties);
}

/**
 * Creates a backup table icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backupTableIcon = (...properties) => {
    const element = document.createElement('div');
    initBackupTableIcon(element, ...properties);
    return element;
}
