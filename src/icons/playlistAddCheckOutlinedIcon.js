import { initIcon } from "./icon.js";

//the url of the playlist add check outlined svg; resolved relative to this module
const URL_PLAYLISTADDCHECKOUTLINED = new URL('../../assets/icons/playlistAddCheckOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add check outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAddCheckOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddCheckOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playlistAddCheckOutlinedIcon', url: URL_PLAYLISTADDCHECKOUTLINED }, ...properties);
}

/**
 * Creates a playlist add check outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddCheckOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddCheckOutlinedIcon(element, ...properties);
    return element;
}
