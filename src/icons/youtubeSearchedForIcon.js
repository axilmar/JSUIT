import { initIcon } from "./icon.js";

//the url of the youtube searched for svg; resolved relative to this module
const URL_YOUTUBESEARCHEDFOR = new URL('../../assets/icons/youtubeSearchedFor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a youtube searched for icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/youtubeSearchedFor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initYoutubeSearchedForIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_YOUTUBESEARCHEDFOR }, ...properties);
}

/**
 * Creates a youtube searched for icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const youtubeSearchedForIcon = (...properties) => {
    const element = document.createElement('div');
    initYoutubeSearchedForIcon(element, ...properties);
    return element;
}
