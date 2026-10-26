import { initIcon } from "./icon.js";

//the url of the note add svg; resolved relative to this module
const URL_NOTEADD = new URL('../../assets/icons/noteAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a note add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noteAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoteAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTEADD }, ...properties);
}

/**
 * Creates a note add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noteAddIcon = (...properties) => {
    const element = document.createElement('div');
    initNoteAddIcon(element, ...properties);
    return element;
}
