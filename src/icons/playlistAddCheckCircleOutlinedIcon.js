import { initIcon } from "./icon.js";

//the url of the playlist add check circle outlined svg; resolved relative to this module
const URL_PLAYLISTADDCHECKCIRCLEOUTLINED = new URL('../../assets/icons/playlistAddCheckCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a playlist add check circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playlistAddCheckCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaylistAddCheckCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playlistAddCheckCircleOutlinedIcon', url: URL_PLAYLISTADDCHECKCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a playlist add check circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playlistAddCheckCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaylistAddCheckCircleOutlinedIcon(element, ...properties);
    return element;
}
