import { initIcon } from "./icon.js";

//the url of the event note svg; resolved relative to this module
const URL_EVENTNOTE = new URL('../../assets/icons/eventNote.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event note icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventNote.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventNoteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EVENTNOTE }, ...properties);
}

/**
 * Creates an event note icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventNoteIcon = (...properties) => {
    const element = document.createElement('div');
    initEventNoteIcon(element, ...properties);
    return element;
}
