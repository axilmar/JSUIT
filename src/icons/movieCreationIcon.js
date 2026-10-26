import { initIcon } from "./icon.js";

//the url of the movie creation svg; resolved relative to this module
const URL_MOVIECREATION = new URL('../../assets/icons/movieCreation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a movie creation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/movieCreation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovieCreationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOVIECREATION }, ...properties);
}

/**
 * Creates a movie creation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movieCreationIcon = (...properties) => {
    const element = document.createElement('div');
    initMovieCreationIcon(element, ...properties);
    return element;
}
