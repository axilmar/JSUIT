import { initIcon } from "./icon.js";

//the url of the playlist remove outlined svg; resolved relative to this module
const URL_PLAYLISTREMOVEOUTLINED = new URL('../../assets/icons/playlistRemoveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist remove outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistRemoveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistRemoveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playlistRemoveOutlinedIcon', url: URL_PLAYLISTREMOVEOUTLINED }, ...properties);
}

/**
 * Creates a playlist remove outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistRemoveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistRemoveOutlinedIcon(element, ...properties);
    return element;
}
