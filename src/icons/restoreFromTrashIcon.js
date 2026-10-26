import { initIcon } from "./icon.js";

//the url of the restore from trash svg; resolved relative to this module
const URL_RESTOREFROMTRASH = new URL('../../assets/icons/restoreFromTrash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restore from trash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restoreFromTrash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestoreFromTrashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTOREFROMTRASH }, ...properties);
}

/**
 * Creates a restore from trash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restoreFromTrashIcon = (...properties) => {
    const element = document.createElement('div');
    initRestoreFromTrashIcon(element, ...properties);
    return element;
}
