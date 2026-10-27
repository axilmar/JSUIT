import { initIcon } from "./icon.js";

//the url of the notes outlined svg; resolved relative to this module
const URL_NOTESOUTLINED = new URL('../../assets/icons/notesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notes outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notesOutlinedIcon', url: URL_NOTESOUTLINED }, ...properties);
}

/**
 * Creates a notes outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotesOutlinedIcon(element, ...properties);
    return element;
}
