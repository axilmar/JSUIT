import { initIcon } from "./icon.js";

//the url of the note add outlined svg; resolved relative to this module
const URL_NOTEADDOUTLINED = new URL('../../assets/icons/noteAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a note add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noteAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoteAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTEADDOUTLINED }, ...properties);
}

/**
 * Creates a note add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noteAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoteAddOutlinedIcon(element, ...properties);
    return element;
}
