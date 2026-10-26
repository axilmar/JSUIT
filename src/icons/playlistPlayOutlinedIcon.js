import { initIcon } from "./icon.js";

//the url of the playlist play outlined svg; resolved relative to this module
const URL_PLAYLISTPLAYOUTLINED = new URL('../../assets/icons/playlistPlayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist play outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistPlayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistPlayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYLISTPLAYOUTLINED }, ...properties);
}

/**
 * Creates a playlist play outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistPlayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistPlayOutlinedIcon(element, ...properties);
    return element;
}
