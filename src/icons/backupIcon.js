import { initIcon } from "./icon.js";

//the url of the backup svg; resolved relative to this module
const URL_BACKUP = new URL('../../assets/icons/backup.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backup icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backup.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'backupIcon', url: URL_BACKUP }, ...properties);
}

/**
 * Creates a backup icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backupIcon = (...properties) => {
    const element = document.createElement('div');
    initBackupIcon(element, ...properties);
    return element;
}
