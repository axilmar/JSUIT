import { initIcon } from "./icon.js";

//the url of the edit off svg; resolved relative to this module
const URL_EDITOFF = new URL('../../assets/icons/editOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'editOffIcon', url: URL_EDITOFF }, ...properties);
}

/**
 * Creates an edit off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editOffIcon = (...properties) => {
    const element = document.createElement('div');
    initEditOffIcon(element, ...properties);
    return element;
}
