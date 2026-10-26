import { initIcon } from "./icon.js";

//the url of the movie creation outlined svg; resolved relative to this module
const URL_MOVIECREATIONOUTLINED = new URL('../../assets/icons/movieCreationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a movie creation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/movieCreationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovieCreationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOVIECREATIONOUTLINED }, ...properties);
}

/**
 * Creates a movie creation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movieCreationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMovieCreationOutlinedIcon(element, ...properties);
    return element;
}
