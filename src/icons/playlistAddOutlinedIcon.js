import { initIcon } from "./icon.js";

//the url of the playlist add outlined svg; resolved relative to this module
const URL_PLAYLISTADDOUTLINED = new URL('../../assets/icons/playlistAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYLISTADDOUTLINED }, ...properties);
}

/**
 * Creates a playlist add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddOutlinedIcon(element, ...properties);
    return element;
}
