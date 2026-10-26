import { initIcon } from "./icon.js";

//the url of the backup table outlined svg; resolved relative to this module
const URL_BACKUPTABLEOUTLINED = new URL('../../assets/icons/backupTableOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backup table outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backupTableOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackupTableOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BACKUPTABLEOUTLINED }, ...properties);
}

/**
 * Creates a backup table outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backupTableOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBackupTableOutlinedIcon(element, ...properties);
    return element;
}
