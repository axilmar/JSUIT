import { initIcon } from "./icon.js";

//the url of the star half outlined svg; resolved relative to this module
const URL_STARHALFOUTLINED = new URL('../../assets/icons/starHalfOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star half outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starHalfOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarHalfOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STARHALFOUTLINED }, ...properties);
}

/**
 * Creates a star half outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starHalfOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStarHalfOutlinedIcon(element, ...properties);
    return element;
}
