import { initIcon } from "./icon.js";

//the url of the note alt svg; resolved relative to this module
const URL_NOTEALT = new URL('../../assets/icons/noteAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a note alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noteAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoteAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noteAltIcon', url: URL_NOTEALT }, ...properties);
}

/**
 * Creates a note alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noteAltIcon = (...properties) => {
    const element = document.createElement('div');
    initNoteAltIcon(element, ...properties);
    return element;
}
