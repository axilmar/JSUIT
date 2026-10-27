import { initIcon } from "./icon.js";

//the url of the note alt outlined svg; resolved relative to this module
const URL_NOTEALTOUTLINED = new URL('../../assets/icons/noteAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a note alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noteAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoteAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noteAltOutlinedIcon', url: URL_NOTEALTOUTLINED }, ...properties);
}

/**
 * Creates a note alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noteAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoteAltOutlinedIcon(element, ...properties);
    return element;
}
