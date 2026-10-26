import { initIcon } from "./icon.js";

//the url of the restore page outlined svg; resolved relative to this module
const URL_RESTOREPAGEOUTLINED = new URL('../../assets/icons/restorePageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restore page outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restorePageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestorePageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTOREPAGEOUTLINED }, ...properties);
}

/**
 * Creates a restore page outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restorePageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRestorePageOutlinedIcon(element, ...properties);
    return element;
}
