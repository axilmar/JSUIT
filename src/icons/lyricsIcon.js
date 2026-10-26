import { initIcon } from "./icon.js";

//the url of the lyrics svg; resolved relative to this module
const URL_LYRICS = new URL('../../assets/icons/lyrics.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lyrics icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lyrics.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLyricsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LYRICS }, ...properties);
}

/**
 * Creates a lyrics icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lyricsIcon = (...properties) => {
    const element = document.createElement('div');
    initLyricsIcon(element, ...properties);
    return element;
}
