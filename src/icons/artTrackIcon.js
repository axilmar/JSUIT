import { initIcon } from "./icon.js";

//the url of the art track svg; resolved relative to this module
const URL_ARTTRACK = new URL('../../assets/icons/artTrack.svg', import.meta.url).href;

/**
 * Initializes an icon element as an art track icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/artTrack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArtTrackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARTTRACK }, ...properties);
}

/**
 * Creates an art track icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const artTrackIcon = (...properties) => {
    const element = document.createElement('div');
    initArtTrackIcon(element, ...properties);
    return element;
}
