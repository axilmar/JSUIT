import { initIcon } from "./icon.js";

//the url of the playlist add svg; resolved relative to this module
const URL_PLAYLISTADD = new URL('../../assets/icons/playlistAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYLISTADD }, ...properties);
}

/**
 * Creates a playlist add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddIcon(element, ...properties);
    return element;
}
