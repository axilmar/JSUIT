import { initIcon } from "./icon.js";

//the url of the save svg; resolved relative to this module
const URL_SAVE = new URL('../../assets/icons/save.svg', import.meta.url).href;

/**
 * Initializes an icon element as a save icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/save.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSaveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAVE }, ...properties);
}

/**
 * Creates a save icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const saveIcon = (...properties) => {
    const element = document.createElement('div');
    initSaveIcon(element, ...properties);
    return element;
}
