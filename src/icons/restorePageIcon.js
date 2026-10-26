import { initIcon } from "./icon.js";

//the url of the restore page svg; resolved relative to this module
const URL_RESTOREPAGE = new URL('../../assets/icons/restorePage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restore page icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restorePage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestorePageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTOREPAGE }, ...properties);
}

/**
 * Creates a restore page icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restorePageIcon = (...properties) => {
    const element = document.createElement('div');
    initRestorePageIcon(element, ...properties);
    return element;
}
