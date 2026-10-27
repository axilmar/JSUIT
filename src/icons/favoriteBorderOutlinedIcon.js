import { initIcon } from "./icon.js";

//the url of the favorite border outlined svg; resolved relative to this module
const URL_FAVORITEBORDEROUTLINED = new URL('../../assets/icons/favoriteBorderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a favorite border outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/favoriteBorderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFavoriteBorderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'favoriteBorderOutlinedIcon', url: URL_FAVORITEBORDEROUTLINED }, ...properties);
}

/**
 * Creates a favorite border outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const favoriteBorderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFavoriteBorderOutlinedIcon(element, ...properties);
    return element;
}
