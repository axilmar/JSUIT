import { initIcon } from "./icon.js";

//the url of the save as svg; resolved relative to this module
const URL_SAVEAS = new URL('../../assets/icons/saveAs.svg', import.meta.url).href;

/**
 * Initializes an icon element as a save as icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/saveAs.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSaveAsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'saveAsIcon', url: URL_SAVEAS }, ...properties);
}

/**
 * Creates a save as icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const saveAsIcon = (...properties) => {
    const element = document.createElement('div');
    initSaveAsIcon(element, ...properties);
    return element;
}
