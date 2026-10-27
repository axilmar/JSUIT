import { initIcon } from "./icon.js";

//the url of the event note outlined svg; resolved relative to this module
const URL_EVENTNOTEOUTLINED = new URL('../../assets/icons/eventNoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event note outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventNoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventNoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eventNoteOutlinedIcon', url: URL_EVENTNOTEOUTLINED }, ...properties);
}

/**
 * Creates an event note outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventNoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEventNoteOutlinedIcon(element, ...properties);
    return element;
}
