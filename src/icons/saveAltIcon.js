import { initIcon } from "./icon.js";

//the url of the save alt svg; resolved relative to this module
const URL_SAVEALT = new URL('../../assets/icons/saveAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a save alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/saveAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSaveAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAVEALT }, ...properties);
}

/**
 * Creates a save alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const saveAltIcon = (...properties) => {
    const element = document.createElement('div');
    initSaveAltIcon(element, ...properties);
    return element;
}
