import { initIcon } from "./icon.js";

//the url of the favorite border svg; resolved relative to this module
const URL_FAVORITEBORDER = new URL('../../assets/icons/favoriteBorder.svg', import.meta.url).href;

/**
 * Initializes an icon element as a favorite border icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/favoriteBorder.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFavoriteBorderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FAVORITEBORDER }, ...properties);
}

/**
 * Creates a favorite border icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const favoriteBorderIcon = (...properties) => {
    const element = document.createElement('div');
    initFavoriteBorderIcon(element, ...properties);
    return element;
}
