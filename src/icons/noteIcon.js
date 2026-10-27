import { initIcon } from "./icon.js";

//the url of the note svg; resolved relative to this module
const URL_NOTE = new URL('../../assets/icons/note.svg', import.meta.url).href;

/**
 * Initializes an icon element as a note icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/note.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noteIcon', url: URL_NOTE }, ...properties);
}

/**
 * Creates a note icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noteIcon = (...properties) => {
    const element = document.createElement('div');
    initNoteIcon(element, ...properties);
    return element;
}
