import { initIcon } from "./icon.js";

//the url of the playlist add check circle svg; resolved relative to this module
const URL_PLAYLISTADDCHECKCIRCLE = new URL('../../assets/icons/playlistAddCheckCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add check circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAddCheckCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddCheckCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PLAYLISTADDCHECKCIRCLE }, ...properties);
}

/**
 * Creates a playlist add check circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddCheckCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddCheckCircleIcon(element, ...properties);
    return element;
}
