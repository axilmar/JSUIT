import { initIcon } from "./icon.js";

//the url of the favorite svg; resolved relative to this module
const URL_FAVORITE = new URL('../../assets/icons/favorite.svg', import.meta.url).href;

/**
 * Initializes an icon element as a favorite icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/favorite.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFavoriteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FAVORITE }, ...properties);
}

/**
 * Creates a favorite icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const favoriteIcon = (...properties) => {
    const element = document.createElement('div');
    initFavoriteIcon(element, ...properties);
    return element;
}
