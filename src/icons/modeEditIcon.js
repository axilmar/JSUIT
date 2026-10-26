import { initIcon } from "./icon.js";

//the url of the mode edit svg; resolved relative to this module
const URL_MODEEDIT = new URL('../../assets/icons/modeEdit.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode edit icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeEdit.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeEditIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODEEDIT }, ...properties);
}

/**
 * Creates a mode edit icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeEditIcon = (...properties) => {
    const element = document.createElement('div');
    initModeEditIcon(element, ...properties);
    return element;
}
