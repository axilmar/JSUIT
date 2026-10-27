import { initIcon } from "./icon.js";

//the url of the playlist add circle outlined svg; resolved relative to this module
const URL_PLAYLISTADDCIRCLEOUTLINED = new URL('../../assets/icons/playlistAddCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAddCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playlistAddCircleOutlinedIcon', url: URL_PLAYLISTADDCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a playlist add circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddCircleOutlinedIcon(element, ...properties);
    return element;
}
