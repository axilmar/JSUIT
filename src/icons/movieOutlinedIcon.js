import { initIcon } from "./icon.js";

//the url of the movie outlined svg; resolved relative to this module
const URL_MOVIEOUTLINED = new URL('../../assets/icons/movieOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a movie outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/movieOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovieOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'movieOutlinedIcon', url: URL_MOVIEOUTLINED }, ...properties);
}

/**
 * Creates a movie outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movieOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMovieOutlinedIcon(element, ...properties);
    return element;
}
