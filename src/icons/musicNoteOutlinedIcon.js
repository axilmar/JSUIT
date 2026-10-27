import { initIcon } from "./icon.js";

//the url of the music note outlined svg; resolved relative to this module
const URL_MUSICNOTEOUTLINED = new URL('../../assets/icons/musicNoteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a music note outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/musicNoteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMusicNoteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'musicNoteOutlinedIcon', url: URL_MUSICNOTEOUTLINED }, ...properties);
}

/**
 * Creates a music note outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const musicNoteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMusicNoteOutlinedIcon(element, ...properties);
    return element;
}
