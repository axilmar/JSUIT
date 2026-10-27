import { initIcon } from "./icon.js";

//the url of the music note svg; resolved relative to this module
const URL_MUSICNOTE = new URL('../../assets/icons/musicNote.svg', import.meta.url).href;

/**
 * Initializes an icon element as a music note icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/musicNote.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMusicNoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'musicNoteIcon', url: URL_MUSICNOTE }, ...properties);
}

/**
 * Creates a music note icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const musicNoteIcon = (...properties) => {
    const element = document.createElement('div');
    initMusicNoteIcon(element, ...properties);
    return element;
}
