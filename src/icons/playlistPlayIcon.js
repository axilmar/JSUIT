import { initIcon } from "./icon.js";

//the url of the playlist play svg; resolved relative to this module
const URL_PLAYLISTPLAY = new URL('../../assets/icons/playlistPlay.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist play icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistPlay.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistPlayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYLISTPLAY }, ...properties);
}

/**
 * Creates a playlist play icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistPlayIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistPlayIcon(element, ...properties);
    return element;
}
