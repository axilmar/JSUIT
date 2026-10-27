import { initIcon } from "./icon.js";

//the url of the movie svg; resolved relative to this module
const URL_MOVIE = new URL('../../assets/icons/movie.svg', import.meta.url).href;

/**
 * Initializes an icon element as a movie icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/movie.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovieIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'movieIcon', url: URL_MOVIE }, ...properties);
}

/**
 * Creates a movie icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movieIcon = (...properties) => {
    const element = document.createElement('div');
    initMovieIcon(element, ...properties);
    return element;
}
