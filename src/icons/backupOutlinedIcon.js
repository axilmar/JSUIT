import { initIcon } from "./icon.js";

//the url of the backup outlined svg; resolved relative to this module
const URL_BACKUPOUTLINED = new URL('../../assets/icons/backupOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backup outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backupOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackupOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BACKUPOUTLINED }, ...properties);
}

/**
 * Creates a backup outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backupOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBackupOutlinedIcon(element, ...properties);
    return element;
}
