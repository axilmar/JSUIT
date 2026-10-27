import { initIcon } from "./icon.js";

//the url of the playlist remove svg; resolved relative to this module
const URL_PLAYLISTREMOVE = new URL('../../assets/icons/playlistRemove.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist remove icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistRemove.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistRemoveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playlistRemoveIcon', url: URL_PLAYLISTREMOVE }, ...properties);
}

/**
 * Creates a playlist remove icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistRemoveIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistRemoveIcon(element, ...properties);
    return element;
}
