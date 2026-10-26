import { initIcon } from "./icon.js";

//the url of the note outlined svg; resolved relative to this module
const URL_NOTEOUTLINED = new URL('../../assets/icons/noteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a note outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTEOUTLINED }, ...properties);
}

/**
 * Creates a note outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoteOutlinedIcon(element, ...properties);
    return element;
}
