import { initIcon } from "./icon.js";

//the url of the edit note svg; resolved relative to this module
const URL_EDITNOTE = new URL('../../assets/icons/editNote.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit note icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editNote.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditNoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITNOTE }, ...properties);
}

/**
 * Creates an edit note icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editNoteIcon = (...properties) => {
    const element = document.createElement('div');
    initEditNoteIcon(element, ...properties);
    return element;
}
