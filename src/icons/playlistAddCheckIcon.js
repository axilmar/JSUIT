import { initIcon } from "./icon.js";

//the url of the playlist add check svg; resolved relative to this module
const URL_PLAYLISTADDCHECK = new URL('../../assets/icons/playlistAddCheck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add check icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAddCheck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddCheckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYLISTADDCHECK }, ...properties);
}

/**
 * Creates a playlist add check icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddCheckIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddCheckIcon(element, ...properties);
    return element;
}
