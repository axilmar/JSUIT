import { initIcon } from "./icon.js";

//the url of the local movies svg; resolved relative to this module
const URL_LOCALMOVIES = new URL('../../assets/icons/localMovies.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local movies icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localMovies.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalMoviesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALMOVIES }, ...properties);
}

/**
 * Creates a local movies icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localMoviesIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalMoviesIcon(element, ...properties);
    return element;
}
