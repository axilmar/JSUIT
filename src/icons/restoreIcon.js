import { initIcon } from "./icon.js";

//the url of the restore svg; resolved relative to this module
const URL_RESTORE = new URL('../../assets/icons/restore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restore icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTORE }, ...properties);
}

/**
 * Creates a restore icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restoreIcon = (...properties) => {
    const element = document.createElement('div');
    initRestoreIcon(element, ...properties);
    return element;
}
