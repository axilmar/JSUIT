import { initIcon } from "./icon.js";

//the url of the edit note outlined svg; resolved relative to this module
const URL_EDITNOTEOUTLINED = new URL('../../assets/icons/editNoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit note outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editNoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditNoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITNOTEOUTLINED }, ...properties);
}

/**
 * Creates an edit note outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editNoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditNoteOutlinedIcon(element, ...properties);
    return element;
}
