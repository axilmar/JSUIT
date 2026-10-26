import { initIcon } from "./icon.js";

//the url of the movie filter svg; resolved relative to this module
const URL_MOVIEFILTER = new URL('../../assets/icons/movieFilter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a movie filter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/movieFilter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovieFilterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOVIEFILTER }, ...properties);
}

/**
 * Creates a movie filter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movieFilterIcon = (...properties) => {
    const element = document.createElement('div');
    initMovieFilterIcon(element, ...properties);
    return element;
}
