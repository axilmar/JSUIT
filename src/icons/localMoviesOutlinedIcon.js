import { initIcon } from "./icon.js";

//the url of the local movies outlined svg; resolved relative to this module
const URL_LOCALMOVIESOUTLINED = new URL('../../assets/icons/localMoviesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local movies outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localMoviesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalMoviesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALMOVIESOUTLINED }, ...properties);
}

/**
 * Creates a local movies outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localMoviesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalMoviesOutlinedIcon(element, ...properties);
    return element;
}
