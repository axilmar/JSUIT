import { initIcon } from "./icon.js";

//the url of the playlist add circle svg; resolved relative to this module
const URL_PLAYLISTADDCIRCLE = new URL('../../assets/icons/playlistAddCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAddCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playlistAddCircleIcon', url: URL_PLAYLISTADDCIRCLE }, ...properties);
}

/**
 * Creates a playlist add circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddCircleIcon(element, ...properties);
    return element;
}
