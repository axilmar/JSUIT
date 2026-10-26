import { initIcon } from "./icon.js";

//the url of the movie filter outlined svg; resolved relative to this module
const URL_MOVIEFILTEROUTLINED = new URL('../../assets/icons/movieFilterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a movie filter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/movieFilterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovieFilterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOVIEFILTEROUTLINED }, ...properties);
}

/**
 * Creates a movie filter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movieFilterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMovieFilterOutlinedIcon(element, ...properties);
    return element;
}
